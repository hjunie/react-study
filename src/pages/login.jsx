import { useState} from "react";

function Login() {
    const [id, setid] = useState("");
    const [pw, setpw] = useState("");
    const [autoLogin, setAutoLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        console.log("아이디:", id);
        console.log("비밀번호:", pw);
        console.log("자동로그인:", autoLogin);
    };

    return (
       <>
           <div className="login-container">
               <div className="login-box">
                   <h2>Login</h2>
                   <div className="input-group mb-20">
                      <label>아이디</label>
                      <input type="text" placeholder="아이디" />
                   </div>

                   <div className="input-group">
                      <div className="input-group">
                         <label>비밀번호</label>

                          <div className="password-box">
                             <input type="password" placeholder="비밀번호"/>
                              <button type="button" className="eye"><img src="../images/🦆 icon _remove red eye_.svg" alt="비밀번호 보기" width="15px"/>
                              </button>
                          </div>
                      </div>
                   </div>

                   <div className="login-options">
                      <label className="auto-login">
                        <input type="checkbox" />
                        <span className="custom-check"></span>
                              자동로그인
                      </label>

                      <div className="links">
                         아이디 · 비밀번호 찾기 | 회원가입
                      </div>
                   </div>
                   
                   <button className="login-btn">로그인</button>
                </div>
          </div>
      </>
          
    );
}
export default Login;
