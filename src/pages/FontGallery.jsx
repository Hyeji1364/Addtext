import React, { useEffect, useState } from "react";
import FontCard from "../components/FontCard";
import "../assets/scss/fontgallery.scss";

const FontGallery = () => {
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    fetch("/assets/data/koreanfont.json")
      .then((response) => response.json())
      .then((data) => setFonts(data))
      .catch((error) => console.error("Error loading font data:", error));
  }, []);

  return (
    <div className="font-gallery">
      {fonts.map((font, index) => (
        <FontCard key={index} font={font} />
      ))}
    </div>
  );
};

export default FontGallery;
