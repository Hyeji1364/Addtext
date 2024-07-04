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

const generateRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Card = ({ text }) => {
  const [hovered, setHovered] = useState(false);
  const [imageUrl] = useState(generateRandomImage()); // 카드가 생성될 때 랜덤 이미지를 선택

  return (
    <div
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className="card-text">{text}</div>
      <img src={imageUrl} alt="Random" className="card-image" />
    </div>
  );
};

const Page1 = () => {
  const cards = new Array(9).fill("Aa");

  return (
    <div className="card-container">
      {cards.map((text, index) => (
        <Card key={index} text={text} />
      ))}
    </div>
  );
};

export default Page1;
