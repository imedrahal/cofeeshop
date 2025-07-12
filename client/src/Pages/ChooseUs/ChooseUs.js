import React from "react";
import "./ChooseUs.css";
import { FaWallet, FaPercentage, FaGift, FaBroadcastTower } from "react-icons/fa";

const Features = () => {
  const items = [
    { icon: <FaWallet />, title: "Paiement sécurisé", desc: "Transactions rapides et sûres." },
    { icon: <FaPercentage />, title: "Remises exclusives", desc: "Jusqu'à 50% sur certains produits." },
    { icon: <FaBroadcastTower />, title: "Évènements live", desc: "Ne ratez aucun événement en direct." },
    { icon: <FaGift />, title: "Cadeaux & Bonus", desc: "Récompenses pour les clients fidèles." },
  ];

  return (
    <div className="features-container">
      {items.map((item, index) => (
        <div className="feature-card" key={index}>
          <div className="icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
