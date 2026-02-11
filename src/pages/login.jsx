import { useState} from "react";

function Login() {
    const [id, setid] = useState("");
    const [pw, setpw] = useState("");

    const handleLogin = () => {
        console.log("아이디:", id);
        console.log("비밀번호:", pw);
    };

    return (
       <>
                <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>

                <input type="text" placeholder="아이디"/>
                <input type="password" placeholder="비밀번호" />

                <button className="login-btn">로그인</button>
            </div>
        </div>
      </>
          
    );
}
export default Login;
