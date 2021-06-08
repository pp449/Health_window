import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import "../scss/sign.scss";

function login() {
  return (
    <div className="sign_wrapper">
      <div className="sign__text">로그인하기</div>
      <div className="sign">
        <span className="sign__ID">
          아이디 <br />
          <form>
            <input type="text" />
          </form>
        </span>
        <span className="sign__PW">
          패스워드 <br />
          <form>
            <input type="password" />
          </form>
        </span>
        <button className="sign__button">제출</button>
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

export default login;
