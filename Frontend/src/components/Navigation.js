import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import "../scss/main.scss";

const li = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/Inbody/",
    text: "Inbody",
  },
  {
    link: "/Counting/",
    text: "Counting",
  },
  {
    link: "/Recommend/",
    text: "Recomment",
  },
  {
    link: "/Community/",
    text: "Community",
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
                  <a href={objLink.link}>{objLink.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
