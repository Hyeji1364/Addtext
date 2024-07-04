import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/scss/headerbody.scss";
import bannerImage from "../assets/img/banner.jpg"; // 배너 이미지 임포트

const HeaderBody = () => {
  const [activePage, setActivePage] = useState(1);
  const navigate = useNavigate();

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
    navigate(`/page${pageNumber}`);
  };

  return (
    <div id="header-body">
      <div className="content-container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="폰트를 검색해보세요."
          />
          <button className="search-button">검색하기</button>
        </div>
        <div className="pagination">
          {[1, 2, 3].map((pageNumber) => (
            <button
              key={pageNumber}
              className={`page-button ${
                activePage === pageNumber ? "active" : ""
              }`}
              onClick={() => handlePageClick(pageNumber)}>
              {activePage === pageNumber && (
                <span className="check-mark">&#10003;</span>
              )}
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
      <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
      </div>
    </div>
  );
};

export default HeaderBody;
