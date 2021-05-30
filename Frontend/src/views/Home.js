import React from "react";
import "../scss/Home.scss";
import {
  FaPinterestP,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="cover-page page-1">
          <div className="page-1__left">
            <div className="main-text">
              <span className="title-h1">
                단순 심플
                <br />
                운동 보조
                <br />
                프로그램
              </span>
            </div>
            <div className="sub-text">
              <span>운동 보조 프로그램, 간단하게 시작해 보세요</span>
            </div>
            <div className="btn">
              <div
                onClick={() => {
                  this.props.history.push("/login");
                }}
              >
                지금 시작하기
              </div>
            </div>
          </div>
          <div className="page-1__right">
            <div className="image">
              <div className="top-bar">
                <div className="btn-1"></div>
                <div className="btn-2"></div>
                <div className="btn-3"></div>
              </div>
              <div className="bottom">
                <div className="text-area">운동, 일단 시작하고 보자</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cover-page page-2">
          <div className="page-2__middle">
            <div className="content-1">
              <div className="main-text">
                <span>지금 시작하면.</span>
              </div>
              <div className="main-text">
                <span>헬스케어가 도와드립니다.</span>
                <br />
              </div>
              <div className="btn">
                <div
                  onClick={() => {
                    this.props.history.push("/login");
                  }}
                >
                  지금 시작하기
                </div>
              </div>
            </div>
            <div className="image">
              <div className="top-bar">
                <div className="btn-1"></div>
                <div className="btn-2"></div>
                <div className="btn-3"></div>
              </div>
              <div className="bottom"></div>
            </div>
          </div>
        </div>
        <footer className="page-footer font-small cyan darken-3">
          <div className="container">
            <div className=" flex-center">
              <a href="/#" className="fb-ic">
                <FaFacebookF />
              </a>
              <a href="/#" className="tw-ic">
                <FaTwitter />
              </a>
              <a href="/#" className="gplus-ic">
                <FaGooglePlusG />
              </a>
              <a href="/#" className="li-ic">
                <FaLinkedinIn />
              </a>
              <a href="/#" className="ins-ic">
                <FaInstagram />
              </a>
              <a href="/#" className="pin-ic">
                <FaPinterestP />
              </a>
            </div>
          </div>

          <p>ⓒ 2020 INPENDANSIM ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    );
  }
}

export default Home;
