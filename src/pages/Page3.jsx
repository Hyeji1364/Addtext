import React from "react";
import "../assets/scss/page3.scss";

const Page3 = () => {
  const fonts = [
    {
      name: "주아체",
      className: "bmjua",
      sampleText: "할 수 있다고 믿으면 뭐든지 할 수 있다."
    }
    // 다른 폰트들도 동일한 형식으로 추가
  ];

  return (
    <div className="page3-container">
      <div className="page3-content">
        {fonts.map((font, index) => (
          <div key={index} className="font-display">
            <div className="font-name">{font.name}</div>
            <div className={`font-sample ${font.className}`}>
              {font.sampleText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page3;
