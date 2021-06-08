import React, { Component } from "react";
import { RiQuestionAnswerFill } from "react-icons/ri";
import SVG from "../assets/icons/SVG";
import "../scss/inbody.scss";

export default class Inbody extends Component {
  state = {
    menu: [
      {
        name: "근육량",
        iconRef: "muscle",
        width: "40",
        height: "40",
      },
      {
        name: "체지방량",
        iconRef: "fat",
        width: "40",
        height: "40",
      },
      {
        name: "몸무게",
        iconRef: "weight",
        width: "40",
        height: "40",
      },
    ],
  };
  render() {
    function array_sidemenu(content) {
      return (
        <div className="utility-bar__menu-item" key={content.name}>
          <SVG name={content.iconRef} />
          {content.name}
        </div>
      );
    }
    return (
      <div className="inbody__wrapper">
        <div className="utility-bar__menu">
          {this.state.menu.map((content) => array_sidemenu(content))}
        </div>
      </div>
    );
  }
}
