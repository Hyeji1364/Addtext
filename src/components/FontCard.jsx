import React, { useEffect, useState } from "react";
import "../assets/scss/fontcard.scss";

const FontCard = ({ font }) => {
  const [fontClass, setFontClass] = useState(null);

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
    <div className={`font ${font.style}`} style={{ fontFamily: fontClass }}>
      <span>{font.name}</span>
      <span>{font.name_eng}</span>
    </div>
  );
};

export default FontCard;
