import React, { Component } from "react";

export default class Inbody extends Component {
  state = {
    utilityContents: [
      {
        name: "뉴스",
        iconRef: "news",
      },
      {
        name: "소설",
        iconRef: "novel",
      },
      {
        name: "한줄명언",
        iconRef: "words",
      },
      {
        name: "노래가사",
        iconRef: "music",
      },
      {
        name: "스도쿠",
        iconRef: "sudoku",
      },
    ],
    utilityContentName: "news",
  };
  getImgUrl(pic, hover) {
    if (hover) return require("../assets/icons/writing_" + pic + "-hover.svg");
    return require("../assets/icons/writing_" + pic + ".svg");
  }
  render() {
    return (
      <div className="mail__wrap">
        <div className="utility-bar__menu">
          {this.state.utilityContents.map((content, index) => (
            <div
              href="#"
              className="utility-bar__menu-item"
              key="index"
              onClick={() =>
                this.setState({ utilityContentName: this.content.iconRef })
              }
            >
              <img
                alt={this.content}
                src="getImgUrl(content.iconRef, false)"
                className="icon"
                width="40"
              />
              <img
                alt={this.content}
                src="getImgUrl(content.iconRef, true)"
                className="icon-hover"
                width="40"
              />
              <div>{this.content}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
