

import { FaShoppingCart } from "react-icons/fa";
import "./NewProducts.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const productsData = [
  {
    id: 1,
    name: "Color Biscuits",
    price: 18.0,
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod4-copyright-470x588.jpg",
    category: "Food Delivery",
    description: "Colorful biscuits with love tag. Perfect for parties.",
  },
  {
    id: 2,
    name: "Fruit Biscuits",
    price: 25.0,
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/sin_product-prod1-copyright-470x588.jpg",
    category: "Bakery",
    description: "Fresh fruit biscuits with rich cream and jam.",
  },
  {
    id: 3,
    name: "Cream Cupcake",
    price: 22.0,
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod6-copyright-470x588.jpg",
    category: "Dessert",
    description: "Creamy cupcakes with toppings and sprinkles.",
  },
  {
    id: 4,
    name: "Macarons Selection",
    price: 21.0,
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod3-copyright-470x588.jpg",
    category: "Macarons",
    description: "Selection of multi-color macarons.",
  },
  {
    id: 5,
    name: "Cherry Cupcake",
    price: 19.0,
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod1-copyright-470x588.jpg",
    category: "Cupcake",
    description: "Cherry-flavored cupcake, light and delicious.",
  },
  {
    id: 6,
    name: "Vanilla Cake",
    price: 30.0,
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod2-copyright-470x588.jpg",
    category: "Cakes",
    description: "Soft vanilla cake with buttercream.",
  },
  {
    id: 7,
    name: "Chocolate Tart",
    price: 28.0,
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod2-copyright-470x588.jpg",
    category: "Tarts",
    description: "Rich chocolate tart with crispy base.",
  },
  {
    id: 8,
    name: "Strawberry Donuts",
    price: 20.0,
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod2-copyright-470x588.jpg",
    category: "Donuts",
    description: "Strawberry glazed donuts, fresh and soft.",
  },

];

const ProductDetails = () => {
  const [product, setProduct] = useState(productsData[1]);
  const [startIndex, setStartIndex] = useState(0);
 const navigate = useNavigate();
 

  const relatedProducts = productsData.filter((p) => p.id !== product.id);
  const visibleProducts = relatedProducts.slice(startIndex, startIndex + 5);

  const handleNext = () => {
    if (startIndex + 5 < relatedProducts.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
      <>  
    <div className="product-container">
      <div className="related-section">
        <h3 style={{textAlign: "center",fontSize: "2.5rem",fontWeight: "bold",}}>New products</h3>
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={handlePrev} disabled={startIndex === 0}>
            <FaChevronLeft />
          </button>
          <div className="related-grid-prod">
            {visibleProducts.map((p) => (
              <div className="related-card-prod" key={p.id} onClick={() => setProduct(p)}>
                <img src={p.image} alt={p.name} />
                <h5>{p.name}</h5>
                <p>${p.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <button className="carousel-btn" onClick={handleNext} disabled={startIndex + 4 >= relatedProducts.length}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div style={{textAlign:"center"}}>
   <button  onClick={() => navigate("/AllProducts")} 
    style={{textAlign: "center",backgroundColor:"#a12d3c",color:"white",fontFamily:"monospace",borderRadius:"12px",padding:"15px",borderColor:"unset"}}>
       New Products</button>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
