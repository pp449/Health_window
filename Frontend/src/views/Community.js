import React, { useEffect, useState, Component } from "react";
import { useHistory } from "react-router-dom";
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
    function contentList(content, index) {
      return (
        <div className="contentBox shadow-lg" key={index}>
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
    return (
      <div>
        {this.state.res.map((content, index) => contentList(content, index))}
      </div>
    );
  }
}

function Community() {
  const history = useHistory();
  const [pageNumber, setPageNumber] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPost, setCurrentPost] = useState();
  const postsPerPage = 10;
  const category = [
    {
      name: "all",
      path: "/community/",
    },
    {
      name: "to-do-list",
      path: "/community/to-do-list",
    },
    {
      name: "routine",
      path: "/community/routine",
    },
  ];

  function setCurrentPosts() {
    const indexOfLast = currentPage * postsPerPage; //var * 10
    const indexOfFirst = indexOfLast - postsPerPage; //Last - 10
    setCurrentPost(data.slice(indexOfFirst, indexOfLast));
  }

  function tmpfunction(num) {
    setCurrentPage(num);
  }

  useEffect(() => {
    const setPageNumbers = async () => {
      const location = window.location.href.split("/community")[1];
      await axios.get("/community" + location).then(function (response) {
        setData(response.data);
      });
    };
    setPageNumbers();
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      let myList = [];
      for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
        myList.push(i);
      }
      setPageNumber(myList);

      setCurrentPosts();
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    setCurrentPosts();
  }, [currentPage]);

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
            {category.map((list) => (
              <div className="category__each" key={list.name}>
                <Link to={list.path}># {list.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <Posts posts={currentPost} />
              <div className="pagination">
                <div className="pagination__wrapper">
                  <ul>
                    {pageNumber.map((number, index) => (
                      <li key={index} className="page-item">
                        {/* <span
                          onClick={() => tmpfunction(number)}
                          className="page-link"
                        >
                          {number}
                        </span> */}
                        <Link to="" className="page-link">
                          {number}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="write__button">
          <Link to="/community/write">글쓰기</Link>
        </div>
      </div>
    </div>
  );
}

export default Community;
