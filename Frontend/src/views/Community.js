import React, { Component } from "react";
import { Link } from "react-router-dom";
import Ralo from "../assets/icons/ralo.jpg";
import { FaSortUp } from "react-icons/fa";

import "../scss/Community.scss";

class Community extends Component {
  state = {
    category: [
      {
        name: "all",
        path: "/community",
      },
      {
        name: "to-do-list",
        path: "/community/to-do-list",
      },
      {
        name: "routine",
        path: "/community/routine",
      },
    ],
    tmp_content: [
      "모든 것을 갈아넣은 ToDoList 프로젝트",
      "맥북과 노마드코더를 동경한 사람의 투두 리스트",
      "To-Do-List 결과물 공유 양식",
      "Mac Do List",
      "너무 귀여운 투두리스",
      "꿈나무개발자가 되고싶은 꿈나무의 포폴 웹사이트",
      "Drag&Drop과 커스터마이징이 가능한 To Do List",
      "코딩 테스트 공부 사이트",
      "흔한 개발자 포트폴리오",
      "당첨 100% 개발자 썰을 들려주세요",
      "예술을 좋아하는 개발자의 포트폴리오 웹사이트!",
    ],
  };
  render() {
    function contentList(content) {
      return (
        <div className="contentBox shadow-lg" key={content}>
          <div className="contentList">
            <div className="contentButton">
              <button>
                <FaSortUp /> 100
              </button>
            </div>
            <div className="contentText">
              {content}
              <div className="contentSubtext">in #to-do-list by pp449</div>
            </div>
            <div className="contentImg">
              <img src={Ralo} alt="ralo" />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="community__wrapper">
        <div className="community__title">
          <h2>Community</h2>
          <p>헬스인 99% 커뮤니티에서 수다 떨어요!</p>
        </div>
        <div className="community__main">
          <div className="community__category">
            <h3>카테고리</h3>
            <div className="category__menu">
              {this.state.category.map((list) => (
                <div key={list.name}>
                  <Link to={list.path}># {list.name}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3">
            {/* backend에서 URL 주소별로 넘겨주는 값을 달리하면 될듯 */}
            {this.state.tmp_content.map((content) => contentList(content))}
          </div>
          <div className="write__button">
            <Link to="/#">글쓰기</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
