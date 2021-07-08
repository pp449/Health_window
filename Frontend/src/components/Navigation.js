import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import axios from "axios";
import "../scss/Navigation.scss";
import logo from "../images/favicon.png";
import { Transition } from "react-transition-group";

export default function Navi() {
  const [isActive, setIsActive] = useState("false");
  const [loggedIn, setLoggedIn] = useState("false");

  useEffect(() => {
    const checkLogin = async () => {
      try {
        await axios.get("/loggedUser").then(function (response) {
          setLoggedIn(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    checkLogin();
  }, []);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const logout = () => {
    axios.get("/logout").then(function () {
      console.log("..?");
      window.location.reload();
    });
    window.location.reload();
  };

  return (
    <div className="navigation app-header">
      {console.log(loggedIn)}
      <div className="nav-div">
        <button
          className="nav__toggle"
          aria-expanded="false"
          type="button"
          onClick={() => toggle()}
        >
          <FaBars size={28} />
        </button>
        <nav role="navigation" className="nav-menu">
          <Link to="/" className="logo title">
            <img src={logo} alt="logo" width="24px" />
            <div>헬스케어</div>
          </Link>
          <Link to="/inbody" className="nav-link">
            인바디
          </Link>
          <Link to="/counting" className="nav-link">
            갯수 측정
          </Link>
          {/* <Link to="/recommend" className="nav-link">
              추천운동
            </Link> */}
          <Link to="/community" className="nav-link">
            커뮤니티
          </Link>
        </nav>
        <div className="account">
          {loggedIn === true ? (
            <span className="logout">
              <button onClick={() => logout()}>로그아웃</button>
            </span>
          ) : (
            <span>
              <Link to="/login" className="account-link desktop">
                로그인하기
              </Link>
              <Link to="/join" className="account-link both">
                회원가입
              </Link>
            </span>
          )}
        </div>
      </div>
      <Transition in={false} timeout={1000} className="side-menu">
        {isActive === true ? (
          <div className="nav-overlay">
            <Link to="write/mail" className="nav-link">
              편지쓰기
            </Link>
            <Link to="/write/rolling" className="nav-link">
              롤링페이퍼 쓰러가기
            </Link>
            <Link to="/mypage" className="nav-link">
              마이페이지
            </Link>
            <Link to="/#" className="overlay-desktop">
              고객센터
            </Link>
            {!loggedIn ? (
              <Link to="/login" className="account-link desktop">
                로그인하기
              </Link>
            ) : (
              <button
                onClick={() => console.log("clicked 헤헿")}
                className="account-link desktop"
              >
                로그아웃
              </button>
            )}
            <Link to="/join" className="both">
              회원가입
            </Link>
          </div>
        ) : (
          <div></div>
        )}

        {/* </If> */}
      </Transition>
    </div>
  );
}
