import React, { useState } from "react";
import "./NavBar.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalQuantity } = useContext(CartContext);
  const quantity = getTotalQuantity();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">


      {!menuOpen && (
        <button className="burger-btn" onClick={() => setMenuOpen(true)}>
               <img
          className="mobile-logo"
          src="//lab.axiomthemes.com/wp-content/uploads/2024/10/l-logo-inverse.png"
          alt="Sweet Cake Mobile"
        />
          <FaBars color="black" />
        </button>
      )}

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {/* Logo mobile dans le menu */}
        <div style={{display:"flex"}}>

        </div>
        <img
          className="mobile-logo"
          src="//lab.axiomthemes.com/wp-content/uploads/2024/10/l-logo-inverse.png"
          alt="Sweet Cake Mobile"
        />
<li>
<button className="close-btn" onClick={() => setMenuOpen(false)}>
          <FaTimes color="#0b0b23" />
        </button>
</li>
        

        <li onClick={() => scrollToSection("carousel")} className="nav-title">Home</li>
        <li onClick={() => navigate(`/AllProducts`)} className="nav-title">Produit</li> 
        <li onClick={() => navigate(`/Teams`)} className="nav-title">Teams</li> 
        {/* <li onClick={() => scrollToSection("OurPrice")} className="nav-title">Pricing</li> */}
              <div className="logo">
        <img
          src="//lab.axiomthemes.com/wp-content/uploads/2024/10/l-logo-inverse.png"
          alt="Sweet Cake"
        />
      </div>
        <li onClick={() => navigate(`/Location`)} className="nav-title">Location</li>
        <li onClick={() => navigate(`/Contact`)} className="nav-title">Contact Us</li> 
        <li onClick={() => navigate(`/blogs`)} className="nav-title">Blogs</li>
        <Link to="/product-details" style={{ textDecoration: "auto" }}>
          {/* <li className="nav-title">Produit</li> */}
        </Link>
        {/* <div className="cart-icon-container" onClick={() => navigate("/cart")}>
        <FaShoppingCart size={24} color="#ebb5cf" />
        {quantity > 0 && <span className="cart-badge">{quantity}</span>}
      </div> */}
      </ul>
     
    </nav>
  );
};

export default Navbar;
