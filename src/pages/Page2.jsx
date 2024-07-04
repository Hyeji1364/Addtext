import React from "react";
import "../assets/scss/page2.scss";

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

const Card = ({ text, backgroundColor }) => {
  return (
    <div className="page2-card" style={{ backgroundColor }}>
      <div className="page2-card-text">{text}</div>
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="page2-card-container">
      {colors.map((color, index) => (
        <Card key={index} text="Font" backgroundColor={color} />
      ))}
    </div>
  );
};

export default Page2;
