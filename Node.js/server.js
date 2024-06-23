require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const { MongoClient, ObjectId } = require('mongodb');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('express').Router();
const PORT = 3001; // 포트 8080 대신 3000을 사용





app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, // 요청에서 쿠키를 전송하기 위해 필요합니다.
  
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 },
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        dbName: 'project',
    })
}))

app.use(passport.initialize());

app.use(passport.session());

passport.serializeUser((user, done) => {
    process.nextTick(() => {
        done(null, { id: user._id, userid: user.userid })
    })
})
// passport.deserializeUser(async (user, done) => {
//     let result = await db.collection('user').findOne({ _id: new ObjectId(user.id) })
//     delete result.password
//     process.nextTick(() => {
//         return done(null, result)
//     })
// });

passport.deserializeUser(async (user, done) => {
    try {
        // 데이터베이스에서 사용자 정보를 찾습니다
        let result = await db.collection('user').findOne({ _id: new ObjectId(user.id) });
        
        if (result) {
            // 사용자 정보가 존재하는 경우, 비밀번호를 삭제합니다
            delete result.password;
        }

        // 비동기 작업이 완료되었음을 알립니다
        process.nextTick(() => {
            return done(null, result || null); // 결과가 없으면 null을 반환합니다
        });
    } catch (error) {
        // 오류가 발생하면 done 함수를 통해 오류를 전달합니다
        process.nextTick(() => {
            return done(error);
        });
    }
});


// 로그인 엔드포인트
app.post('/login', async (req, res, next) => {
    passport.authenticate('local', (error, user, info) => {
        if (error) return res.status(500).json(error)
        if (!user) return res.status(401).json(info.message)
        req.logIn(user, (err) => {
            if (err) return next(err)
            res.redirect('http://localhost:3000/');
            console.log('로그인 성공')
        })
    })(req, res, next)
});

app.use(cookieParser());

// 로그아웃 엔드포인트
app.post('/logout', async (req, res) => {
    if (req.session) {
        res.clearCookie('connect.sid', { path: '/'});
        console.log('cookieClear!')
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                res.status(500).send('Error destroying session');
            } else {
                console.log('good');
                console.log(req.session);
                // res.redirect('http://localhost:3000/')
                res.sendStatus(200);
            }
        });
    } else {
        res.send('No active session to destroy');
    }
});


passport.use(new LocalStrategy({
    usernameField: 'userid',
    passwordField: 'password'
}, async (입력한아이디, 입력한비번, cb) => {
    let result = await db.collection('user').findOne({ userid: 입력한아이디 })
    if (!result) {
        return cb(null, false, { message: '아이디 DB에 없음' })
    }
    if (await bcrypt.compare(입력한비번, result.password)) {
        return cb(null, result)
    } else {
        return cb(null, false, { message: '비번불일치' });
    }
}))


let db
const url = process.env.MONGO_URL
new MongoClient(url).connect().then((client) => {
    console.log('DB연결성공')
    db = client.db('project')
    app.listen(3001, () => {
        console.log('http://localhost:3001 에서 서버 실행중')
    })
}).catch((err) => {
    console.log(err)
})


app.get('/', (req, res) => {
    res.send('hi')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

// 로그아웃 api 실험
app.get('/logout', (req, res) => {
    res.render('logout.ejs')
})

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
})


// 로그인상태 확인 api
app.get('/api/user', (req, res) => {
    // 세션에서 사용자 정보 확인
    if (req.cookies['connect.sid']) {
        res.json({ authenticated: true });
    } else {
        res.json({ authenticated: false });
    }
});

app.post('/signup', async (req, res) => {
    try {
        if (await db.collection('user').findOne({ userid: req.body.userid })) {
            res.send(`<script>alert('id is already in use');
            location.href ='/signup';</script>`)
        }
        else {
            let hash = await bcrypt.hash(req.body.password, 10)
            await db.collection('user').insertOne({
                username: req.body.username,
                userid: req.body.userid,
                password: hash,
                email: req.body.email,
                phone: req.body.phone
            })
            res.redirect('http://localhost:3000/')
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).send('server error');

    }

})

// 로그인했을때 마이페이지에서 사용자의 정보 보여주는 api
app.get('/api/userinfo', (req, res) => {
    // 인증 미들웨어를 통해 사용자가 로그인했는지 확인
    if (req.cookies['connect.sid']) {
        // 로그인한 사용자의 정보를 반환
        res.json({ username: req.user.username, email: req.user.email,
        userid : req.user.userid, phone : req.user.phone });
    } else {
        // 로그인하지 않은 경우 에러 메시지 반환
        res.status(401).send('Unauthorized');
    }
});

// 비밀번호변경api
app.post('/api/modifyPW', async (req, res) => {
    let hash = await bcrypt.hash(req.body.password, 10)
    await db.collection('user').updateOne({ _id: new ObjectId(req.user._id) }, { $set: { password: hash } });
    res.redirect('http://localhost:3000/')
})

