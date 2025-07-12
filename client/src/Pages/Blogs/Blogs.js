import React, { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";

const blogArticles = [
  {
    id: 1,
    title: "Bienfaits des fruits secs",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post18-copyright.jpg",
    category: "Nutrition",
    excerpt: "Les fruits secs sont riches en fibres et bons gras. Découvrez leurs bienfaits.",
  },
  {
    id: 2,
    title: "Routine sportive efficace",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post19-copyright.jpg",
    category: "Sport",
    excerpt: "Adoptez une routine simple et efficace pour brûler les graisses.",
  },
  {
    id: 3,
    title: "Pourquoi bien dormir",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post20-copyright.jpg",
    category: "Santé",
    excerpt: "Le sommeil est essentiel pour la récupération mentale et physique.",
  },
  {
    id: 4,
    title: "Les super-aliments",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post21-copyright.jpg",
    category: "Nutrition",
    excerpt: "Découvrez les bienfaits des super-aliments dans votre quotidien.",
  },
  {
    id: 5,
    title: "S'entraîner à jeun ?",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post22-copyright.jpg",
    category: "Sport",
    excerpt: "Est-ce vraiment efficace de faire du sport sans avoir mangé ?",
  },
    {
    id: 6,
    title: "S'entraîner à jeun ?",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post22-copyright.jpg",
    category: "Sport",
    excerpt: "Est-ce vraiment efficace de faire du sport sans avoir mangé ?",
  },
    {
    id: 7,
    title: "Routine sportive efficace",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post19-copyright.jpg",
    category: "Sport",
    excerpt: "Adoptez une routine simple et efficace pour brûler les graisses.",
  },
     {
    id: 8,
    title: "Routine sportive efficace",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post19-copyright.jpg",
    category: "Sport",
    excerpt: "Adoptez une routine simple et efficace pour brûler les graisses.",
  },
     {
    id: 9,
    title: "Routine sportive efficace",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post19-copyright.jpg",
    category: "Sport",
    excerpt: "Adoptez une routine simple et efficace pour brûler les graisses.",
  },
];

const BlogCarousel = () => {
  const trackRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    const container = trackRef.current;
    const amount = container.offsetWidth * 0.5;
    container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => scroll("right"), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="blog-carousel">
      <h2 className="blog-carousel-title">Nos derniers articles</h2>
      <div className="blog-carousel-wrapper">
        <button className="carousel-arrow left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>

        <div className="blog-carousel-track" ref={trackRef}>
          {blogArticles.map((article) => (
            <div
              key={article.id}
              className="blog-card"
              onClick={() => navigate(`/blog/${article.id}`)}
            >
              <img src={article.image} alt={article.title} className="blog-image" />
              <div className="blog-info">
                <span className="blog-category">{article.category}</span>
                <h3 className="blog-title">{article.title}</h3>
                <p className="blog-excerpt">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCarousel;
