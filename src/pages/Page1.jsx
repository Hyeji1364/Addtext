import React, { useState } from "react";
import "../assets/scss/page1.scss";

// 이미지 파일을 개별적으로 임포트합니다.
import random1 from "../assets/img/random1.jpg";
import random2 from "../assets/img/random2.jpg";
import random3 from "../assets/img/random3.jpg";
import random4 from "../assets/img/random4.jpg";
import random5 from "../assets/img/random5.jpg";
import random6 from "../assets/img/random6.jpg";
import random7 from "../assets/img/random7.jpg";
import random8 from "../assets/img/random8.jpg";
import random9 from "../assets/img/random9.jpg";
import random10 from "../assets/img/random10.jpg";
import random11 from "../assets/img/random11.jpg";
import random12 from "../assets/img/random12.jpg";
import likeIcon from "../assets/img/svg/like.svg"; // 기본 좋아요 아이콘
import likeFullIcon from "../assets/img/svg/like-full.svg"; // 좋아요 클릭된 아이콘

// 이미지를 배열에 추가합니다.
const images = [
  random1,
  random2,
  random3,
  random4,
  random5,
  random6,
  random7,
  random8,
  random9,
  random10,
  random11,
  random12
];

const fonts = [
  { name: "주아체", className: "bmjua" },
  { name: "지마켓산스체", className: "GmarketSansMedium" },
  { name: "창원단감아삭체", className: "CWDangamAsac-Bold" },
  { name: "HS새마을체", className: "HSSaemaul-Regular" },
  { name: "망고보드 또박체", className: "MangoDdobak-B" },
  { name: "에스코어 드림체", className: "S-CoreDream-3Light" }
];

const generateRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Card = ({ font, index, liked, toggleLike }) => {
  const [hovered, setHovered] = useState(false);
  const [imageUrl] = useState(generateRandomImage()); // 카드가 생성될 때 랜덤 이미지를 선택

  return (
    <div
      className={`page1-card ${font.className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className="page1-card-overlay"></div>
      <div className="page1-card-text">
        {font.name}
        <br />
        Aa
      </div>
      <img src={imageUrl} alt="Random" className="page1-card-image" />
      <img
        src={liked ? likeFullIcon : likeIcon}
        alt="Like"
        className="page1-card-like"
        onClick={() => toggleLike(index)}
      />
    </div>
  );
};

const Page1 = () => {
  const [liked, setLiked] = useState(Array(fonts.length).fill(false));

  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <div className="page1-card-container">
      {fonts.map((font, index) => (
        <Card
          key={index}
          font={font}
          index={index}
          liked={liked[index]}
          toggleLike={toggleLike}
        />
      ))}
    </div>
  );
};

export default Page1;
