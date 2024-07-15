import React, { useEffect, useState } from "react";
import "../assets/scss/fontcard.scss";

const animations = ["animateText1", "animateText2", "animateText3"];

const randomImages = [
  "/assets/img/random1.jpg",
  "/assets/img/random2.jpg",
  "/assets/img/random3.jpg",
  "/assets/img/random4.jpg",
  "/assets/img/random5.jpg",
  "/assets/img/random6.jpg",
  "/assets/img/random7.jpg",
  "/assets/img/random8.jpg",
  "/assets/img/random9.jpg",
  "/assets/img/random10.jpg",
  "/assets/img/random11.jpg",
  "/assets/img/random12.jpg"
];

const FontCard = ({ font, styleIndex }) => {
  const [fontClass, setFontClass] = useState(null);
  const cardColors = [
    "#0066FF",
    "#FFF0F5", // 라벤더블러쉬
    "#9370DB", // 미디엄퍼플
    "#FFDAB9", //피치퍼프
    "#FFEBCD",
    "#FFC0CB",
    "#87CEFA",
    "#ADD8E6",
    "#216ad6",
    "#e1eeec",
    "#FA8072", // 샐몬
    "#393939",
    "87CEFA", // 라이트스카이블루
    "DEB887", // 벌리우드
    "D8BFD8" // 디스틀(라벤더)
  ];
  const textColors = {
    "#FFFF00": "#000000", // 배경이 노란색일 때 텍스트 색상을 어둡게 설정
    default: "#FFFFFF" // 기본 텍스트 색상
  };
  const randomCardColor =
    cardColors[Math.floor(Math.random() * cardColors.length)];
  const textColor = textColors[randomCardColor] || textColors.default;
  const randomAnimation =
    animations[Math.floor(Math.random() * animations.length)];
  const randomImage =
    randomImages[Math.floor(Math.random() * randomImages.length)];

  useEffect(() => {
    if (font.cssUrl) {
      fetch(font.cssUrl)
        .then((response) => response.text())
        .then((cssText) => {
          const styleElement = document.createElement("style");
          styleElement.innerHTML = cssText;
          document.head.appendChild(styleElement);

          const fontFaceMatch = cssText.match(
            /@font-face\s*{[^}]*font-family:\s*['"]([^'"]+)['"]/
          );
          if (fontFaceMatch) {
            const fontFamily = fontFaceMatch[1];
            setFontClass(fontFamily);
          }

          return () => {
            document.head.removeChild(styleElement);
          };
        })
        .catch((error) => console.error("Error loading font CSS:", error));
    }
  }, [font.cssUrl]);

  return (
    <div
      className={`font-card style${styleIndex}`}
      style={{ backgroundColor: randomCardColor }}>
      <div
        className="font-card-text"
        style={{ color: textColor, fontFamily: fontClass }}>
        <h2 data-content={font.name}>{font.name}</h2>
        <p data-content={font.name_eng}>{font.name_eng}</p>
      </div>
      <div
        className="hover-background"
        style={{ backgroundImage: `url(${randomImage})` }}></div>
    </div>
  );
};

export default FontCard;
