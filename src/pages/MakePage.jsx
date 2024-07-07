import React, { useState } from "react";
import "../assets/scss/make.scss"; // 스타일 파일 경로 수정
import { Link } from "react-router-dom";

const MakePage = () => {
  const [activeTab, setActiveTab] = useState("madeFonts");

  return (
    <div className="font-page">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "madeFonts" ? "active" : ""}`}
          onClick={() => setActiveTab("madeFonts")}>
          제작한 폰트
        </div>
        <div
          className={`tab ${activeTab === "likedFonts" ? "active" : ""}`}
          onClick={() => setActiveTab("likedFonts")}>
          좋아요 한 폰트
        </div>
        <div
          className={`tab ${activeTab === "myPosts" ? "active" : ""}`}
          onClick={() => setActiveTab("myPosts")}>
          내가 쓴 게시글
        </div>
        <div
          className={`tab ${activeTab === "likedPosts" ? "active" : ""}`}
          onClick={() => setActiveTab("likedPosts")}>
          좋아요 한 게시글
        </div>
      </div>
      <div className="content">
        {activeTab === "madeFonts" && (
          <div>
            <h2>안녕하세요, 사용자님! :)</h2>
            <p>제작하신 폰트가 없어요.</p>
          </div>
        )}
        {activeTab === "likedFonts" && (
          <div>
            <h2>안녕하세요, 사용자님! :)</h2>
            <p>좋아요 한 폰트가 없어요.</p>
          </div>
        )}
        {activeTab === "myPosts" && (
          <div>
            <h2>안녕하세요, 사용자님! :)</h2>
            <p>내가 쓴 게시글이 없어요.</p>
          </div>
        )}
        {activeTab === "likedPosts" && (
          <div>
            <h2>안녕하세요, 사용자님! :)</h2>
            <p>좋아요 한 게시글이 없어요.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MakePage;
