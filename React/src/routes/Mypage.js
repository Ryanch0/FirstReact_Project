import Navup from './Navup';
import Footer from './Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';

function Mypage() {
  let [userData, setUserData] = useState(null);
  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      const data = await axios.get('http://localhost:3001/api/userinfo',
        { withCredentials: true });
      setUserData(data.data); // 상태에 데이터 저장
      console.log(data.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <Navup />
      <div className='mypg'>
        <div className='mypg2'>
          <span>My info</span>
          <a href='/mypage/modify'>modify-password</a>
        </div>

        <div style={{marginLeft : '40px'}}>
          {userData && (
            <>
              <h5>username : {userData.username}</h5>
              <h5>userid : {userData.userid}</h5>
              <h5>email : {userData.email}</h5>
              <h5>phone : {userData.phone}</h5>
            </>
          )}
        </div>
        </div>
      




      <Footer />
    </>

  )
}

export default Mypage