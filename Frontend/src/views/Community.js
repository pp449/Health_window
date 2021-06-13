import React, { Component } from "react";
import { Link } from "react-router-dom";
import Ralo from "../assets/icons/ralo.jpg";
import { FaSortUp } from "react-icons/fa";
import axios from "axios";
import "../scss/Pagination.scss";
import "../scss/Community.scss";

class Posts extends Component {
  state = {
    res: this.props.posts,
  };

  render() {
    function contentList(content) {
      return (
        <div className="contentBox shadow-lg" key={content.title}>
          <div className="contentList">
            <div className="contentButton">
              <button>
                <FaSortUp /> {content.ddabong}
              </button>
            </div>
            <div className="contentText">
              {content.title}
              <div className="contentSubtext">in #to-do-list by pp449</div>
            </div>
            <div className="contentImg">
              <img src={Ralo} alt="ralo" />
            </div>
          </div>
        </div>
      );
    }
    return <div>{this.state.res.map((content) => contentList(content))}</div>;
  }
}

class Community extends Component {
  state = {
    pageNumbers: [],
    res: [],
    loading: true,
    currentPage: 1,
    paging: [
      {
        posts: [],
        postsPerPage: 10,
      },
    ],
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
  };

  setPageNumbers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ res: response.data });
    this.setState({ loading: false });
    let myList = [];
    for (
      let i = 1;
      i <= Math.ceil(this.state.res.length / this.state.paging[0].postsPerPage);
      i++
    ) {
      myList.push(i);
    }
    this.setState({ pageNumbers: myList });
  };
  componentDidMount() {
    this.setPageNumbers();
  }
  render() {
    function currentPosts(tmp) {
      const indexOfLast = tmp.currentPage * tmp.paging[0].postsPerPage;
      const indexOfFirst = indexOfLast - tmp.paging[0].postsPerPage;
      let currentPost = tmp.res.slice(indexOfFirst, indexOfLast);
      return currentPost;
    }
    function setCurrentPage(tmp, num) {
      tmp.setState({ currentPage: num });
      console.log(tmp.state.currentPage);
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
                <div className="category__each" key={list.name}>
                  <Link to={list.path}># {list.name}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3">
            {this.state.loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                <Posts posts={currentPosts(this.state)} />
                {/* {this.state.res.map((content) => contentList(content))} */}
                <div className="pagination">
                  <div className="pagination__wrapper">
                    <ul>
                      {this.state.pageNumbers.map((number) => (
                        <li key={number} className="page-item">
                          <span
                            onClick={(num) => setCurrentPage(this, num)}
                            className="page-link"
                          >
                            {number}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
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
