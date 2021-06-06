import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import "../scss/login.scss";

function signup() {
  return (
    <div className="wrapper">
      <div className="login__text">회원가입</div>
      <div className="login">
        <span className="login__ID">
          아이디 <br />
          <form>
            <input></input>
          </form>
        </span>
        <span className="login__PW">
          패스워드 <br />
          <form>
            <input></input>
          </form>
        </span>
        <button className="login__button">제출</button>
      </div>
      <div className="social_login">
        <button className="kakao_login">
          <RiKakaoTalkFill />
          카카오 로그인 →
        </button>
        <button className="github_login">
          <FaGithub />
          깃허브 로그인 →
        </button>
      </div>
    </div>
  );
}

export default signup;
