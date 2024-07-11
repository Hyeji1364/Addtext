import React, { useEffect, useState } from "react";
import FontCard from "../components/FontCard";
import "../assets/scss/fontgallery.scss";

const FontGallery = () => {
  const [fonts, setFonts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/assets/data/koreanfont.json")
      .then((response) => response.json())
      .then((data) => setFonts(data))
      .catch((error) => console.error("Error loading font data:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFonts = fonts.filter((font) =>
    font.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-gallery">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search fonts"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {filteredFonts.map((font, index) => (
        <FontCard key={index} font={font} />
      ))}
    </div>
  );
};

export default FontGallery;
