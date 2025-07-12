import React from "react";
import { useNavigate } from "react-router-dom";
import Partener from "../Partener/Partener"
import "./Header.css";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <button className="shop-button" 
    //   onClick={() => navigate("/products")}
      >
        SHOP
      </button>

      <h1 className="hero-title">Pharmacy at your fingertips!</h1>

      <div className="hero-images">
        <img
          src="https://lab.axiomthemes.com/wp-content/uploads/2024/10/l-img-copyright-20.jpg"
          alt="Tablet"
        />
        <img
          src="https://lab.axiomthemes.com/wp-content/uploads/2024/10/l-img-copyright-18.jpg"
          alt="Pills"
        />
        <img
          src="https://lab.axiomthemes.com/wp-content/uploads/2024/10/l-img-copyright-19.jpg"
          alt="Cosmetics"
        />
      </div>

      <div>
      <Partener/>
      </div>
    </div>
  );
};

export default HeroSection;
