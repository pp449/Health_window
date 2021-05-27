import React from "react";
import "../scss/Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="cover-page page-1">
          <div className="page-1__left">
            <div className="main-text">
              <span className="title-h1">
                전군 통합
                <br />
                단순 심플
                <br />
                인터넷
                <br />
                편지서비스
              </span>
            </div>
            <div className="sub-text">
              <span>인터넷 편지, 간단하게 작성해보세요.</span>
            </div>
            <div className="btn">
              <div
                onClick={() => {
                  this.props.history.push("/inbody");
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
                <div className="text-area">인편, 일단 쓰고 보자</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cover-page page-2">
          <div className="page-2__middle">
            <div className="content-1">
              <div className="main-text">
                <span>보내기만 하세요.</span>
              </div>
              <div className="main-text">
                <span>인편단심이 채워드립니다.</span>
              </div>
              <div className="sub-text">
                <span>인터넷 편지, 간단하게 작성해보세요.</span>
              </div>
              <div className="btn">
                <div
                  onClick={() => {
                    this.props.history.push("/inbody");
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
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a href="/#" className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a href="/#" className="gplus-ic">
                <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a href="/#" className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a href="/#" className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a href="/#" className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
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
