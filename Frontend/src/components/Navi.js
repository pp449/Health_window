import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaToggleOff } from "react-icons/fa";
import "../scss/Navi.scss";
import logo from "../images/favicon.png";

export default class Navi extends Component {
  state = {
    isActive: false,
    loggedIn: true,
  };
  toggle() {
    this.setState({ isActive: !this.state.isActive });
  }
  handleLogOut() {
    console.log("LLog OOut");
  }
  render() {
    let logged;
    if (!this.loggedIn) {
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
            <FaToggleOff />
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
            <Link to="/recommend" className="nav-link">
              추천운동
            </Link>
            <Link to="/community" className="nav-link">
              커뮤니티
            </Link>
          </nav>
          <div className="account">
            <Link to="/#" className="account-link desktop">
              고객센터
            </Link>{" "}
            {logged}
            <Link to="/signup" className="account-link both">
              회원가입
            </Link>{" "}
          </div>
        </div>
      </div>
    );
  }
}
