import React, { Component } from "react";
import axios from "axios";
import SVG from "../assets/icons/SVG";
import InbodyChart from "../components/inbody/MuscleChart";
import { Link } from "react-router-dom";
import "../scss/inbody.scss";

export default class Inbody extends Component {
  state = {
    isHover: false,
    menu: [
      {
        name: "근육량",
        iconRef: "muscle",
        iconRef_hover: "muscle_hover",
        viewBox_h: "0 0 300 300",
      },
      {
        name: "체지방량",
        iconRef: "fat",
        iconRef_hover: "fat_hover",
        viewBox_h: "0 0 60 60",
      },
      {
        name: "몸무게",
        iconRef: "weight",
        iconRef_hover: "weight_hover",
        viewBox: "0 0 800 800",
        viewBox_h: "0 0 800 800",
      },
    ],
  };
  render() {
    function array_sidemenu(content) {
      return (
        <Link to={`/inbody/${content.iconRef}`} key={content.name}>
          <div className="utility-bar__menu-item">
            <div className="icon">
              <SVG viewBox={content.viewBox} name={content.iconRef} />
            </div>
            <div className="icon-hover">
              <SVG viewBox={content.viewBox_h} name={content.iconRef_hover} />
            </div>
            {content.name}
          </div>
        </Link>
      );
    }

    return (
      <div className="inbody__wrapper">
        <div className="inbody__chart__wrapper">
          <div className="utility-bar__menu">
            {this.state.menu.map((content) => array_sidemenu(content))}
          </div>
          <div className="inbody__chart">
            <InbodyChart />
          </div>
        </div>
        <div className="add_chart_value">
          <input type="text" />
          <button>submit</button>
        </div>
      </div>
    );
  }
}
