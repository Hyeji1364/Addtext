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

const FontCard = ({ font }) => {
  const [fontClass, setFontClass] = useState(null);
  const cardColors = [
    "#FF6347",
    "#FFA07A",
    "#FFD700",
    "#ADFF2F",
    "#7FFF00",
    "#32CD32",
    "#00FF7F",
    "#00FA9A",
    "#00CED1",
    "#4682B4",
    "#1E90FF",
    "#6495ED",
    "#8A2BE2",
    "#DA70D6",
    "#FF00FF"
  ];
  const textColors = ["#FFFFFF", "#000000"];
  const randomCardColor =
    cardColors[Math.floor(Math.random() * cardColors.length)];
  const randomTextColor =
    textColors[Math.floor(Math.random() * textColors.length)];
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
    <div className={`font-card`} style={{ backgroundColor: randomCardColor }}>
      <div
        className="font-card-text"
        style={{ color: randomTextColor, fontFamily: fontClass }}>
        <h2 className={randomAnimation}>{font.name}</h2>
        <p className={randomAnimation}>{font.name_eng}</p>
      </div>
      <div
        className="hover-background"
        style={{ backgroundImage: `url(${randomImage})` }}></div>
    </div>
  );
};

export default FontCard;
