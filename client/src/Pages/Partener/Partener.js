import React from "react";
import "./Partener.css";
import { FaSearchPlus } from "react-icons/fa";

const images = [
  "https://lab.axiomthemes.com/wp-content/uploads/2024/10/L-Client_01.png",
  "https://lab.axiomthemes.com/wp-content/uploads/2024/10/L-Client_02.png",
  "https://lab.axiomthemes.com/wp-content/uploads/2024/10/L-Client_03.png",
  "https://lab.axiomthemes.com/wp-content/uploads/2024/10/L-Client_04.png",
  "https://lab.axiomthemes.com/wp-content/uploads/2024/10/L-Client_05.png",
  "https://lab.axiomthemes.com/wp-content/uploads/2024/10/L-Client_06.png",
];

const ImageGrid = () => {
  return (
    <div className="image-row">
      {images.map((src, index) => (
        <div className="image-wrapper" key={index}>
          <img src={src} alt={`img-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
