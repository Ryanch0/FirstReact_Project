import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Main from './routes/Main';
import Navleft from './routes/Navleft';
import Navleftadd from './routes/Navleftadd';
import MenOutwears from './routes/category/MenOutwears';
import Footer from './routes/Footer';
import { Row, Col } from 'react-bootstrap';
import MenJeans from './routes/category/MenJeans';
import MenTrousers from './routes/category/MenTrousers';
import WomenOutwears from './routes/category/WomenOutwears';
import WomenJeans from './routes/category/WomenJeans';
import WomenTrousers from './routes/category/WomenTrousers';
import Login from './routes/Login';
import Signup from './routes/Signup';
import MypageEdit from './routes/MypageEdit';
import Mypage from './routes/Mypage';
import MenOutDetail from './routes/MenOutDetail';
import MenJeanDetail from './routes/MenOutDetail';
import { loginStatus, loginStatus2, setUserData, userData } from './store';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  let [menOut, setMenOut] = useState([]);
  let [menJean, setMenJean] = useState([]);
  let [menTrouser, setMenTrouser] = useState([]);
  let [womenOut, setWomenOut] = useState([]);
  let [womenJean, setWomenJean] = useState([]);
  let [womenTrouser, setWomenTrouser] = useState([]);
  let dispatch = useDispatch()

  useEffect(() => {
    fetchData();
    fetchData1();
    fetchData2();
    fetchData3();
    fetchData4();
    fetchData5();
  }, []);

  useEffect(() => {
    checkLoginStatus()
  }, [])

  let userData = useSelector((state) => state.userData);



  const checkLoginStatus = async () => {
    try {
      // 서버에 요청하여 로그인 상태 확인
      const response = await axios.get('http://localhost:3001/api/user',
        { withCredentials: true })
      // 쿠키를 함꼐 보내야해!!!
      const { authenticated } = response.data;
      console.log(authenticated)
      if (authenticated == false) {
        dispatch(loginStatus2())
        console.log('hi')
      } else {
        dispatch(loginStatus())
        console.log('22')
      }

    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://ryanch0.github.io/JSONdata/men-outwears.json');
      setMenOut(response.data); // 상태에 데이터 저장
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchData1 = async () => {
    try {
      const response = await axios.get('https://ryanch0.github.io/JSONdata/MenJeans.json');
      setMenJean(response.data); // 상태에 데이터 저장
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData2 = async () => {
    try {
      const response = await axios.get('https://ryanch0.github.io/JSONdata/MenTrousers.json');
      setMenTrouser(response.data); // 상태에 데이터 저장
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData3 = async () => {
    try {
      const response = await axios.get('https://ryanch0.github.io/JSONdata/WomenOutwears.json');
      setWomenOut(response.data); // 상태에 데이터 저장
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData4 = async () => {
    try {
      const response = await axios.get('https://ryanch0.github.io/JSONdata/WomenJeans.json');
      setWomenJean(response.data); // 상태에 데이터 저장
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData5 = async () => {
    try {
      const response = await axios.get('https://ryanch0.github.io/JSONdata/WomenTrousers.json');
      setWomenTrouser(response.data); // 상태에 데이터 저장
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}>
        </Route>

        <Route path='/shop/men/outwears'
          element={
            <>
              <Navleftadd />
              <Col md='10' sm='9' xs='9'>
                <Navleft />
                <div className='spaceForSide'>
                  <span>MEN / OUTWEARS</span>
                  <Row>
                    <MenOutwears menOut={menOut} />
                  </Row>
                </div>
              </Col>
              <Footer />
            </>}>
        </Route>

        <Route path='/shop/men/outwears/detail/:id'
          element={
            <>
              <Navleftadd />
                <Navleft />
                <div className='spaceForSide'>
                  <MenOutDetail menOut={menOut} />
                </div>
              <Footer />
            </>}>
        </Route>

        <Route path='/shop/men/jeans'
          element={
            <>
              <Navleftadd />
              <Col md='10' sm='9' xs='9'>
                <Navleft />
                <div className='spaceForSide'>
                  <Row>
                    <MenJeans menJean={menJean} />
                  </Row>
                </div>
              </Col>
              <Footer />
            </>}>
        </Route>

        {/* <Route path='/shop/men/jeans/detail/:id'
          element={
            <>
              <Navleftadd />
                <Navleft />
                <div className='spaceForSide'>
                  <MenJeanDetail menJean={menJean} />
                </div>
              <Footer />
            </>}>
        </Route> */}

        <Route path='/shop/men/trousers'
          element={
            <>
              <Navleftadd />
              <Col md='10' sm='9' xs='9'>
                <Navleft />
                <div className='spaceForSide'>
                  <span>MEN / TROUSERS</span>
                  <Row>
                    <MenTrousers menTrouser={menTrouser} />
                  </Row>
                </div>
              </Col>
              <Footer />
            </>}>
        </Route>

        <Route path='/shop/women/outwears'
          element={
            <>
              <Navleftadd />
              <Col md='10' sm='9' xs='9'>
                <Navleft />
                <div className='spaceForSide'>
                  <span>WOMEN / OUTWEARS</span>
                  <Row>
                    <WomenOutwears womenOut={womenOut} />
                  </Row>
                </div>
              </Col>
              <Footer />
            </>}>
        </Route>

        <Route path='/shop/women/jeans'
          element={
            <>
              <Navleftadd />
              <Col md='10' sm='9' xs='9'>
                <Navleft />
                <div className='spaceForSide'>
                  <span>WOMEN / JEANS</span>
                  <Row>
                    <WomenJeans womenJean={womenJean} />
                  </Row>
                </div>
              </Col>
              <Footer />
            </>}>
        </Route>

        <Route path='/shop/women/trousers'
          element={
            <>
              <Navleftadd />
              <Col md='10' sm='9' xs='9'>
                <Navleft />
                <div className='spaceForSide'>
                  <span>WOMEN / TROUSERS</span>
                  <Row>
                    <WomenTrousers womenTrouser={womenTrouser} />
                  </Row>
                </div>
              </Col>
              <Footer />
            </>}>
        </Route>


        <Route path='/login'
          element={
            <Login />
          }>
        </Route>

        <Route path='/signup'
          element={
            <Signup />
          }>
        </Route>

        <Route path='/mypage'
          element={<Mypage />}>
        </Route>


        <Route path='/mypage/modify'
          element={
            <MypageEdit />
          }>
        </Route>






        <Route path='*' element={<div>404page</div>} />
      </Routes>
    </div>
  );
}

export default App;
