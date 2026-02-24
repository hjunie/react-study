import { useState} from "react";

function Join() {
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
                      
                      <div className="id-row">
                        <input type="text" placeholder="아이디" />
                        <button className="id-row">중복확인</button>
                      </div>
                      
                      <div className="err">이미 사용 중인 아이디입니다.</div>
                      </div>

                   <div className="input-group">
                      <div className="input-group">
                         <label>비밀번호</label>

                          <div className="password-box">
                             <input type="password" placeholder="비밀번호"/>
                          </div>
                              <div className="err">비밀번호는 8~16자, 영문/숫자/특수문자를 포함해야 합니다.</div>
                      </div>
                   </div>

                   <div className="input-group">
                      <div className="input-group">
                         <label>비밀번호 확인</label>

                          <div className="password-box">
                             <input type="password" placeholder="비밀번호"/>
                          </div>
                              <div className="err">비밀번호가 일치하지 않습니다.</div>

                      </div>
                   </div>

                  <div className="input-group">
                      <div className="input-group">
                         <label>이름</label>

                          <div className="username">
                             <input type="username" placeholder="이름"/>
                          </div>
                              <div className="err">이름을 입력해 주세요.</div>

                      </div>
                   </div>
                  
                   <div className="input-group">
                      <div className="input-group">
                         <label>이메일</label>

                          <div className="email">
                             <input type="email" placeholder="이메일"/>
                          </div>
                              <div className="err">올바른 이메일 형식이 아닙니다.</div>

                      </div>
                   </div>
                   
                   <div className="input-group">
                      <div className="input-group">
                         <label>휴대폰 번호</label>

                          <div className="phonenumber">
                             <input type="phonenumber" placeholder="휴대폰 번호"/>
                          </div>
                              <div className="err">휴대폰 번호를 다시 확인해 주세요.</div>
                      </div>
                   </div>

                   <div className="input-group">
                      <div className="input-group">
                         <label>인증번호 확인</label>

                          <div className="pinnumber">
                             <input type="pinnumber" placeholder="인증번호 확인"/>
                          </div>
                              <div className="err">인증번호 입력 시간이 초과되었습니다.</div>
                      </div>
                   </div>
                   
                   <button className="login-btn">회원가입</button>
                </div>
          </div>
      </>
          
    );
}
export default Join;
