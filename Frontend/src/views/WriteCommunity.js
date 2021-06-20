import React from "react";
import "../scss/WriteCommunity.scss";

function WriteCommunity() {
  return (
    <div className="write__wrapper">
      <div className="write__title">
        <h2>글쓰기</h2>
      </div>
      <div>
        <form className="write__content">
          <div className="title">
            <input type="text" placeholder="제목 쓰기" />
          </div>
          <div className="category">
            <select name="category">
              <option value="to-do-list">to-do-list</option>
              <option value="routine">routine</option>
            </select>
          </div>
          <div className="content">
            <textarea name="content" />
          </div>
          <div className="submit">
            <button onClick={() => console.log("clicked")} className="button">
              등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WriteCommunity;
