import React, { useState } from "react";
import "../assets/scss/page3.scss";
import likeIcon from "../assets/img/svg/like.svg"; // 기본 좋아요 아이콘
import likeFullIcon from "../assets/img/svg/like-full.svg"; // 좋아요 클릭된 아이콘

const Page3 = () => {
  const fonts = [
    {
      name: "주아체",
      className: "bmjua",
      sampleText: "할 수 있다고 믿으면 뭐든지 할 수 있다."
    },
    {
      name: "지마켓산스체",
      className: "GmarketSansMedium",
      sampleText: "할 수 있다고 믿으면 뭐든지 할 수 있다."
    },
    {
      name: "창원단감아삭체",
      className: "CWDangamAsac-Bold",
      sampleText: "할 수 있다고 믿으면 뭐든지 할 수 있다."
    },
    {
      name: "HS새마을체",
      className: "HSSaemaul-Regular",
      sampleText: "할 수 있다고 믿으면 뭐든지 할 수 있다."
    },
    {
      name: "망고보드 또박체",
      className: "MangoDdobak-B",
      sampleText: "할 수 있다고 믿으면 뭐든지 할 수 있다."
    },
    {
      name: "에스코어 드림체",
      className: "S-CoreDream-3Light",
      sampleText: "할 수 있다고 믿으면 뭐든지 할 수 있다."
    }

    // 다른 폰트들도 동일한 형식으로 추가
  ];

  const [liked, setLiked] = useState(Array(fonts.length).fill(false));

  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <div className="page3-container">
      <div className="page3-content">
        {fonts.map((font, index) => (
          <div key={index} className="font-display">
            <div className="font-name">{font.name}</div>
            <div className={`font-sample ${font.className}`}>
              {font.sampleText}
            </div>
            <img
              src={liked[index] ? likeFullIcon : likeIcon}
              alt="Like"
              className="font-like"
              onClick={() => toggleLike(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page3;
