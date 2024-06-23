import '../App.css';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Navleft() {

    let [menModal, setMenModal] = useState(false);
    let [fade, setFade] = useState('')
    let [fade2, setFade2] = useState('')
    let [womenModal, setWomenModal] = useState(false);

    let loggedIn = useSelector((state) => state.loggedIn);
    const navigate = useNavigate();

    const handleLogout = async (event) => {
        event.preventDefault();
    
        try {
          // 로그아웃 요청을 서버로 보냅니다.
          await axios.post('http://localhost:3001/logout', null, {
            withCredentials: true, // 쿠키를 서버에 전송하기 위해 필요합니다.
          });
    
          // 로그아웃이 완료되면 페이지를 리로드합니다.
          window.location.reload('http://localhost:3000/');
        } catch (error) {
          console.error('Error logging out:', error);
        }
      };



    useEffect(() => {
        let a = setTimeout(() => { setFade('navmodal2') }, 100)
        return (() => {
            clearTimeout(a);
            setFade('')
        })
    }, [menModal])
    useEffect(() => {
        let a = setTimeout(() => { setFade2('navmodal2') }, 100)
        return (() => {
            clearTimeout(a);
            setFade2('')
        })
    }, [womenModal])

    return (
        <div className="sidebar">
            <div className="logo">
                <a href='/'> <span>Liberté et Amour</span></a>
            </div>
            <ul className="menu">
                <li onClick={() => {
                    setMenModal(true)
                    if (menModal == true) {
                        setMenModal(false)
                    }
                }}>Men</li>
                {menModal == true ? <div className={`navmodal ${fade}`}>
                    <li><a href='/shop/men/outwears'>Outwears</a></li>
                    <li><a href='/shop/men/jeans'>Jeans</a></li>
                    <li><a href='/shop/men/trousers'>Trousers</a></li>
                </div> : null}

                <li onClick={() => {
                    setWomenModal(true)
                    if (womenModal == true) {
                        setWomenModal(false)
                    }
                }}>Women</li>
                {womenModal == true ? <div className={`navmodal ${fade2}`}>
                    <li><a href='/shop/women/outwears'>Outwears</a></li>
                    <li><a href='/shop/women/jeans'>Jeans</a></li>
                    <li><a href='/shop/women/trousers'>Trousers</a></li>
                </div> : null}
                {/* 로그인하면 로그아웃,마이페이지 버튼 활성화 */}

                {loggedIn === false ? <li><a href="/login">login</a></li>
                    : <> <form onSubmit={handleLogout} className="logout2">
                        <button type="submit">logout</button>
                    </form>
                        <li><a href="/mypage">mypage</a></li></>}
                <li><a href='/cart'>Cart</a></li>
            </ul>
        </div>
    );
}

export default Navleft;

