import React from "react";
import axios from "axios";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import "../scss/sign.scss";

function Join() {
  return (
    <div className="sign_wrapper">
      <div className="sign__text">회원가입</div>
      <div className="sign join">
        <form action="/join" method="post">
          <span className="sign__ID">
            아이디 <br />
            <input type="text" name="id" />
          </span>
          <span className="sign__PW">
            패스워드 <br />
            <input type="password" name="pw" />
          </span>
          <span className="sign__PW">
            패스워드 확인 <br />
            <input type="password" name="pw2" />
          </span>
          <span className="sign__button">
            <input type="submit" value="Submit" />
          </span>
        </form>
      </div>
      <div className="social_login">
        <button
          className="kakao_login"
          onClick={() => axios.get("/auth/kakao")}
        >
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

export default Join;
