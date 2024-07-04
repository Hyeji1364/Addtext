import React from "react";
import "../assets/scss/page2.scss";

const fonts = [
  {
    name: "주아체",
    className: "bmjua"
  },
  {
    name: "지마켓산스체",
    className: "GmarketSansMedium"
  },
  {
    name: "창원단감아삭체",
    className: "CWDangamAsac-Bold"
  },
  {
    name: "HS새마을체",
    className: "HSSaemaul-Regular"
  },
  {
    name: "망고보드 또박체",
    className: "MangoDdobak-B"
  },
  {
    name: "에스코어 드림체",
    className: "S-CoreDream-3Light"
  }
  // 필요한 만큼 폰트를 추가하세요.
];

const colors = [
  "#FFB6C1",
  "#ADD8E6",
  "#90EE90",
  "#FFDEAD",
  "#FF69B4",
  "#87CEEB",
  "#FFD700",
  "#32CD32",
  "#FFA07A",
  "#9370DB",
  "#20B2AA",
  "#FF6347",
  "#8A2BE2",
  "#5F9EA0",
  "#D2691E",
  "#FF4500",
  "#7FFF00",
  "#6495ED",
  "#DC143C",
  "#00CED1",
  "#FF8C00",
  "#1E90FF",
  "#B22222",
  "#DAA520",
  "#ADFF2F",
  "#00FF7F",
  "#FF00FF",
  "#DDA0DD",
  "#7B68EE",
  "#4682B4"
];

const Card = ({ font, backgroundColor }) => {
  return (
    <div className={`page2-card ${font.className}`} style={{ backgroundColor }}>
      <div className="page2-card-text">
        {font.name}
        <br />
        Aa
      </div>
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="page2-card-container">
      {fonts.map((font, index) => (
        <Card
          key={index}
          font={font}
          backgroundColor={colors[index % colors.length]}
        />
      ))}
    </div>
  );
};

export default Page2;
