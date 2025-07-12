import React ,{ useState }from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"; // FaXTwitter vient de react-icons v4.10+

import "./Footer.css";

const Footer = () => {
 const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

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
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column footer-about">
          <div className="footer-logo">  <img
          src="//lab.axiomthemes.com/wp-content/uploads/2024/10/l-logo-inverse.png"
          alt="Sweet Cake"
        /></div>
          <p>
            Ignissimos ducimus qui blanditiis prae sentium voluptatum deleniti.
          </p>
        </div>

        <div className="footer-column footer-bestsellers">
          <h4>Best Sellers</h4>

          <div className="footer-product">
            <img
              src="https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod19-copyright-470x588.jpg"
              alt="Face care kit"
            />
            <div>
              <strong>Face care kit</strong>
              <p>$229.00 – $269.00</p>
            </div>
          </div>

          <div className="footer-product">
            <img
              src="https://lab.axiomthemes.com/wp-content/uploads/2024/10/prod20-copyright-470x588.jpg"
              alt="Magnesium B6"
            />
            <div>
              <strong>Magnesium B6</strong>
              <p>$59.00</p>
            </div>
          </div>
        </div>

        <div className="footer-column footer-links">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/AllProducts">Produit</a></li>
            <li><a href="/Teams">Teams</a></li>
            <li><a href="/Location">Location</a></li>
            <li><a href="/Contact">Contacts Us</a></li>
          </ul>
        </div>

        <div className="footer-column footer-socials">
          <h4>Socials</h4>
          <div className="footer-social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
        <FaFacebookF />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="social-icon">
        <FaXTwitter />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
        <FaLinkedinIn />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
        <FaInstagram />
      </a>
    </div>
        </div>
      </div>

      <div className="footer-bottom">
        ImedRahal © 2025. All rights reserved.
      </div>

      <button
        className="back-to-top"
      onClick={() => scrollToSection("Header")}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
