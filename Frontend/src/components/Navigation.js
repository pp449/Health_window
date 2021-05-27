import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import "../scss/Navigation.scss";

const li = [
  {
    link: "/",
    text: "홈",
  },
  {
    link: "/inbody/",
    text: "인바디",
  },
  {
    link: "/counting/",
    text: "갯수 측정",
  },
  {
    link: "/recommend/",
    text: "추천운동",
  },
  {
    link: "/community/",
    text: "커뮤니티",
  },
];

export default class Navigation extends Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <>
        <div className="navBar">
          <button onClick={this.Toggle}>
            <FaAlignRight />
          </button>
          <ul className={this.state.toggle ? "links show-nav" : "links"}>
            {li.map((objLink, i) => {
              return (
                <li key={i}>
                  <Link to={objLink.link}>{objLink.text}</Link>
                </li>
              );
            })}
            {/* <li className="login">
              <a href="/login">Login</a>
            </li> */}
          </ul>
        </div>
      </>
    );
  }
}
