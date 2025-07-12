import React from "react";
import "./ScrollingBanner.css";

const ScrollingBanner = ({ text }) => {
  return (
    <div className="banner-container">
      <div className="banner-text">
      {text}
      </div>
    </div>
  );
};

export default ScrollingBanner;
