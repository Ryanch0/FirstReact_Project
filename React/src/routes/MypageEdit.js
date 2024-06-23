import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navup from './Navup';
import Footer from './Footer';

function MypageEdit() {
    let [pwmatch, setPwmatch] = useState(true);
    let [pwlength, setPwlength] = useState(true);
    let [pw, setPw] = useState('');
    let [pw2, setPw2] = useState('');
    const [userInfo, setUserInfo] = useState(null);

    const pwfx = (event) => {
        const { value } = event.target;
        const regex = /^$|^[^\s]+$/;
        if (regex.test(value)) {
            setPw(value)
        }
    };
    const pwfx2 = (event) => {
        const { value } = event.target;
        const regex = /^$|^[^\s]+$/;
        if (regex.test(value)) {
            setPw2(value)
        }
    };
    const handleSubmit = (event) => {
        if (pw !== pw2) {
            event.preventDefault();
        }
    };
    useEffect(() => {
        if (pw == pw2) {
            setPwmatch(true)
        } else {
            setPwmatch(false)
        }
    })
    useEffect(() => {
        if (pw.length == 0) {
            setPwlength(true)
        } else if(pw.length < 6) {
            setPwlength(false)
        } else {
            setPwlength(true)
        }
    })

    // 파일 통합하고 이거 사용할 것

    //    로그인 시에만 다음 페이지를 보여주세요
    // useEffect(() => {
    //     const fetchUserInfo = async () => {
    //         try {
    //             const response = await axios.get('/api/userinfo');
    //             setUserInfo(response.data);
    //         } catch (error) {
    //             console.error('사용자 정보를 가져오는데 실패했습니다.', error);
    //         }
    //     };

    //     fetchUserInfo();
    // }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시 한 번만 실행됨

    // if (!userInfo) {
    //     return <div>login required</div>;
    // }

    return (
        // <div>
        //     <h1>마이페이지</h1>
        //     <p>사용자 Id: {userInfo.userid}</p>
        //     <p>사용자 이름: {userInfo.username}</p>
        //     <p>이메일: {userInfo.email}</p>
        // </div>
        <>
            <Navup />
            <div className="login">
                <form action='http://localhost:3001/api/modifyPW' method='POST' onSubmit={handleSubmit} >
                    <input type="password" placeholder="change-password" name="password" value={pw}
                        onChange={pwfx} />
                    {pwlength == true ? <div style={{ height: '20px' }}></div>
                        : <div style={{ color: 'red', padding: '2px' }}>at least six-passwords required</div>}
                    <input type="password" placeholder="confirm-password" name="password2"
                        value={pw2} onChange={pwfx2} />
                    {pwmatch == true ? <div style={{ height: '20px' }}></div>
                        : <div style={{ color: 'red', padding: '2px' }}>incorrect password</div>}
                    <button type="submit">change</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default MypageEdit;