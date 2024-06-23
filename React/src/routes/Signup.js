import Navup from "./Navup";
import Footer from "./Footer";
import '../App.js'
import { useState, useEffect } from "react";

function Signup() {
    let [phone, setPhone] = useState('');
    let [name, setName] = useState('');
    let [id, setId] = useState('');
    let [pw, setPw] = useState('');
    let [pw2, setPw2] = useState('');
    let [email, setEmail] = useState('');
    let [pwmatch, setPwmatch] = useState(true);
    let [pwlength, setPwlength] = useState(true);
    let [nameEx, setNameEx] = useState(true);
    let [idEx, setIdEx] = useState(true);
    let [emailEx, setEmailEx] = useState(true);



    const phonefx = (e) => {
        const regex = /^[0-9]{0,13}$/;
        if (regex.test(e.target.value)) {
            setPhone(e.target.value);
        }
    }

    const namefx = (event) => {
        const { value } = event.target;
        const regex = /^[A-Za-z]*$/;
        if (regex.test(value)) {
            setName(value)
        }
        else {
            alert('only English allowed')
        }
    }
    const idfx = (event) => {
        const { value } = event.target;
        const regex = /^[A-Za-z0-9]*$/;
        if (regex.test(value)) {
            setId(value)
        }
        else {
            alert('only English and number allowed')
        }
    }
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
    }

    const handleSubmit = (event) => {
        if (pw !== pw2) {
            event.preventDefault();
        }
        if (name.length == 0 || nameEx == false) {
            event.preventDefault();
        }
        if (id.length == 0 || idEx == false) {
            event.preventDefault();
        }
        if (pw.length == 0 || pwlength == false) {
            event.preventDefault();
        }
        if (email.length == 0 || emailEx == false) {
            event.preventDefault();
        }
    };

    useEffect(() => {
        if (phone == null) {
            return
        }
        if (phone.length === 11) {
            setPhone(phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (phone.length === 13) {
            setPhone(phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }, [phone]);

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

    useEffect(() => {
        if (name.length == 0) {
            setNameEx(true)
        } else if (name.length < 3) {
            setNameEx(false)
        } else if (name.length >= 3) {
            setNameEx(true)
        }
    })
    useEffect(() => {
        if (id.length == 0) {
            setIdEx(true)
        } else if (id.length < 4) {
            setIdEx(false)
        } else if (id.length >= 4) {
            setIdEx(true)
        }
    })
    useEffect(()=>{
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!regex.test(email)) {
                setEmailEx(false)
            } if (email.length == 0){
                setEmailEx(true)
            } else if(regex.test(email)) {
                setEmailEx(true)
            }
    })
    return (
        <>
            <Navup />
            <div className="login">
                <form action="http://localhost:3001/signup" method="POST" onSubmit={handleSubmit}>
                    <input type="text" placeholder="name" name="username" value={name}
                        onChange={namefx} />
                    {nameEx == true ? <div style={{ height: '20px' }}></div>
                        : <div style={{ color: 'red', padding: '2px' }}>at least three-words required</div>}
                    <input type="text" placeholder="id" name="userid" value={id}
                        onChange={idfx} />
                    {idEx == true ? <div style={{ height: '20px' }}></div>
                        : <div style={{ color: 'red', padding: '2px' }}>at least four-words required</div>}
                    <input type="password" placeholder="password" name="password" value={pw}
                        onChange={pwfx} />
                    {pwlength == true ? <div style={{ height: '20px' }}></div>
                        : <div style={{ color: 'red', padding: '2px' }}>at least six-passwords required</div>}
                    <input type="password" placeholder="confirm password" name="password2"
                        value={pw2} onChange={pwfx2} />
                    {pwmatch == true ? <div style={{ height: '20px' }}></div>
                        : <div style={{ color: 'red', padding: '2px' }}>incorrect password</div>}
                    <input type="text" placeholder="example@example.com" name="email" value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}/>
                    {emailEx == true ? <div style={{ height: '20px' }}></div>
                        : <div style={{ color: 'red', padding: '2px' }}>incorrect e-mail form</div>}
                    <input type="text" placeholder="phone" name="phone" onChange={phonefx}
                        value={phone} />
                    <div style={{ height: '20px' }}></div>
                    <button type="submit">join</button>
                </form>
            </div>
            <Footer />
        </>

    )
}

export default Signup