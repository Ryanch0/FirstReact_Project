import { Container, Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../App.js'
import axios from "axios";
import { loginStatus2 } from "../store";
import { useDispatch } from "react-redux";


function Navup() {
  let loggedIn = useSelector((state) => state.loggedIn);
  const navigate = useNavigate();
  let dispatch = useDispatch()

  // 구현실패한 비동기 로그아웃 처리방식
  // const logout = async () => {
  //   try {
  //     await axios.post('http://localhost:3001/logout');
  //     window.location.reload();
  //   } catch (error) {
  //     console.error('Error logging out:', error);
  //   }
  // };

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

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" >
      <Container>
        <Navbar.Brand href="/" style={{ fontSize: '24px', fontFamily: 'Gothic, sans-serif' }}>Liberté et Amour</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: loggedIn === false ? '90%' : '80%' }}>
            {/* 로그인하면 로그아웃,마이페이지 버튼 활성화 */}
            <Nav.Link href="/shop/men/outwears">shop</Nav.Link>
            {/* <Nav.Link onClick={logout}>logout</Nav.Link> */}

            {loggedIn === false ? <Nav.Link href="/login">login</Nav.Link>
              : <> <form onSubmit={handleLogout} className="nav-link logout">
                <button type="submit">logout</button>
                </form>
                <Nav.Link href="/mypage">mypage</Nav.Link></>}
            <Nav.Link href="/cart">cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navup;