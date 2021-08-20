import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import "../scss/sign.scss";

function Login() {
  return (
    <div className="sign_wrapper">
      <div className="sign__text">로그인하기</div>
      <div className="sign">
        <form action="/signin" method="post">
          <span className="sign__ID">
            아이디 <br />
            <input type="text" name="email" />
          </span>
          <span className="sign__PW">
            패스워드 <br />
            <input type="password" name="password" />
          </span>
          <span className="sign__button">
            <input type="submit" value="Submit" />
          </span>
        </form>
      </div>
      <div className="social_login">
        <div className="kakao_login">
          <a href="http://localhost:4000/auth/kakao">
            <RiKakaoTalkFill />
            카카오 로그인 →
          </a>
        </div>
        <button className="github_login">
          <FaGithub />
          깃허브 로그인 →
        </button>
      </div>
    </div>
  );
}

export default Login;
