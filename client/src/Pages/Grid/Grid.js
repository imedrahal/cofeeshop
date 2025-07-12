import React from "react";
import "./Grid.css";

const HealthGrid = () => {
  const items = [
    {
      title: "Prescription medications",
      image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/l-img-copyright-20.jpg", // femme avec un médicament
      large: true,
    },
    {
      title: "Vitamins & supplements",
      image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/l-img-copyright-20.jpg",
    },
   
    {
      title: "Baby & childcare",
      image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/l-img-copyright-21.jpg",
    },
  ];

  return (
    <div className="health-grid">
      {items.map((item, index) => (
        <div
          key={index}
          className={`health-card ${item.large ? "large" : ""}`}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="overlay" />
          <div className="text">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default HealthGrid;
