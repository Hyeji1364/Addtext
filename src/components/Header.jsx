import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/header.scss";
import leftIcon from "../assets/img/svg/left-icon.svg";
import rightIcon from "../assets/img/svg/right-icon.svg";
import darkModeIcon from "../assets/img/svg/sunny.svg";
import loginIcon from "../assets/img/svg/login-button.svg";

const Header = () => {
  return (
    <>
      <header id="header" role="banner">
        <div className="logo-container">
          <img src={leftIcon} alt="Left Icon" className="left-icon" />
          <Link to="/" className="logo-link">
            <div className="logo">Add text</div>
          </Link>
          <img src={rightIcon} alt="Right Icon" className="right-icon" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#make">폰트제작</a>
            </li>
            <li>
              <a href="#share">디자인공유</a>
            </li>
          </ul>
        </nav>
        <div className="right-section">
          <img
            src={darkModeIcon}
            alt="Dark Mode Icon"
            className="dark-mode-icon"
          />
          <button className="login-button">
            <img src={loginIcon} alt="Login Icon" />
            <span>로그인</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
