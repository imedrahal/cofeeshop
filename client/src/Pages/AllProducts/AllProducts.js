// src/Pages/AllProducts.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllProducts.css";

const allProducts = [
  {
    id: 1,
    name: "vitamine c",
    category: "Vitamines",
    price: 25.99,
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod1-copyright-470x588.jpg",
  },
  {
    id: 2,
    name: "vitamine D",
    category: "Vitamines",
    price: 18.5,
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod2-copyright-470x588.jpg",
  },
  {
    id: 3,
    name: "Skin care",
    category: "Skin care",
    price: 15.0,
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod19-copyright-470x588.jpg",
  },
  {
    id: 4,
    name: "Skin care",
    category: "Skin care",
    price: 21.0,
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod19-copyright-470x588.jpg",
  },
  {
    id: 5,
    name: "Skin care",
    category: "Skin care",
    price: 12.0,
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod19-copyright-470x588.jpg",
  },
  {
    id: 6,
    name: "Magnesium B6",
    category: "Vitamines",
    price: 9.5,
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod6-copyright-470x588.jpg",
  },
];

const AllProducts = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(allProducts.map((p) => p.category))];

  const filtered = allProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory === "All" || product.category === selectedCategory)
  );

  return (
    <div className="product-page">
        <div style={{textAlign:"center"}} className="search-bar">
              <input
              className="search-input"
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        </div>
      <div className="product-header">
        <h2>All Products</h2>      
      </div>

      <div className="product-content">
        <div className="category-list">
          <h4>Categories</h4>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? "active" : ""}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className="product-grid">
          {filtered.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
