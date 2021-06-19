import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../scss/Navigation.scss";
import logo from "../images/favicon.png";
import { If } from "react-if";
import { Transition } from "react-transition-group";

export default class Navi extends Component {
  state = {
    isActive: false,
    loggedIn: false,
  };
  toggle() {
    this.setState({ isActive: !this.state.isActive });
  }
  handleLogOut() {
    console.log("LLog OOut");
  }
  render() {
    let logged;
    if (!this.state.loggedIn) {
      logged = (
        <Link to="/login" className="account-link desktop">
          로그인하기
        </Link>
      );
    } else {
      logged = (
        <button
          onClick={() => this.handleLogOut()}
          className="account-link desktop"
        >
          로그아웃
        </button>
      );
    }

    return (
      <div className="navigation app-header">
        <div className="nav-div">
          <button
            className="nav__toggle"
            aria-expanded="false"
            type="button"
            onClick={() => this.toggle()}
          >
            {/* <i className="fas fa-bars fa-2x"></i> */}
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
            {logged}
            <Link to="/signup" className="account-link both">
              회원가입
            </Link>
          </div>
        </div>
        <Transition in={false} timeout={1000} className="side-menu">
          <If condition={this.state.isActive}>
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
              {!this.state.loggedIn ? (
                <Link to="/login" className="account-link desktop">
                  로그인하기
                </Link>
              ) : (
                <button
                  onClick={() => this.handleLogOut()}
                  className="account-link desktop"
                >
                  로그아웃
                </button>
              )}
              <a href="/#" className="both">
                회원가입
              </a>
            </div>
          </If>
        </Transition>
      </div>
    );
  }
}
