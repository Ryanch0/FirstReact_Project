import Navup from "./Navup";
import Footer from "./Footer";
import '../App.js'
import { useSelector,useDispatch } from "react-redux";
import { loginStatus } from "../store.js";
import axios from 'axios';



function Login() {
    let loggedIn = useSelector((state) => state.loggedIn);
    let dispatch = useDispatch();

    // const handleLogin = async () => {
    //     try {
    //       // 예제에서는 하드코딩된 자격 증명을 사용하지만, 실제로는 사용자 입력을 사용해야 합니다.
    //      await axios.get('http://localhost:8080/api/user')
    //      .then(()=>{
    //       if({authenticated : true}){
    //         dispatch(loginStatus())
    //       }
    //      })
         
    //     } catch (error) {
    //       console.error('로그인 실패:', error);
    //     }
    //   };    

    return (
        <>
            <Navup />
            <div className="login">
                <form action="http://localhost:3001/login" method="POST">
                    <input type="text" placeholder="id" name="userid" />
                    <div style={{ height: '20px' }}></div>
                    <input type="password" placeholder="password" name="password" />
                    <div style={{ height: '20px' }}></div>
                    <a href="/findpw">Forgot your password?</a>
                    <br></br>
                    <a href="/signup">Create an account</a>
                    <button type="submit">Login</button>
                </form>
            </div>
            <Footer />
        </>

    )
}

export default Login