import React from "react";
import "./ExampleProduct.css";

const PromoBanners = () => {
  return (
    <div className="promo-container">
      <div
        className="promo-banner"
        style={{
          backgroundImage: `url('https://lab.axiomthemes.com/wp-content/uploads/2024/10/l-img-copyright-20.jpg')`,
        }}
      >
        <div className="promo-text">
          <p className="promo-discount">UP TO 45% OFF</p>
          <h2>Vitamin-rich cod liver oil capsules for good health</h2>
          <button className="promo-button">SHOP NOW</button>
        </div>
      </div>

      <div
        className="promo-banner"
        style={{
          backgroundImage: `url('https://lab.axiomthemes.com/wp-content/uploads/2024/10/l-img-copyright-21.jpg')`,
        }}
      >
        <div className="promo-text">
          <p className="promo-discount">UP TO 20% OFF</p>
          <h2>Childcare sale</h2>
          <button className="promo-button">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanners;
