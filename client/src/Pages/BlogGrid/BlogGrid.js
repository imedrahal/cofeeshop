// src/Pages/BlogGrid.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogGrid.css";

const blogPosts = [
  {
    id: 1,
    title: "The role of medical research centers in public health",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post18-copyright.jpg",
    date: "October 10, 2024",
    category: "News",
  },
  {
    id: 2,
    title: "Breakthroughs from leading medical research centers",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post19-copyright.jpg",
    date: "October 9, 2024",
    category: "News",
  },
  {
    id: 3,
    title: "How research centers are tackling infectious diseases",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post20-copyright.jpg",
    date: "October 9, 2024",
    category: "News",
  },
  {
    id: 4,
    title: "Common types of medical testing and what they reveal",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post21-copyright.jpg",
    date: "October 7, 2024",
    category: "News",
  },
  {
    id: 5,
    title: "The importance of early detection through testing",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post22-copyright.jpg",
    date: "October 6, 2024",
    category: "News",
  },
  {
    id: 6,
    title: "How medical testing is evolving with technology",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post22-copyright.jpg",
    date: "October 5, 2024",
    category: "News",
  },
  {
    id: 7,
    title: "COVID-19 and its impact on medical testing practices",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post19-copyright.jpg",
    date: "October 4, 2024",
    category: "News",
  },
  {
    id: 8,
    title: "Medical testing practice in chronic disease management",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post19-copyright.jpg",
    date: "October 3, 2024",
    category: "News",
  },
  {
    id: 9,
    title: "Medical testing in preventive healthcare: why it's crucial",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post22-copyright.jpg",
    date: "October 2, 2024",
    category: "News",
  },
];

const BlogGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-grid-container">
      <div className="blog-grid-header">
        <h1>Blog Grid</h1>
      </div>
      <div className="blog-grid-content">
        {blogPosts.map((post) => (
          <div
            className="blog-card"
            key={post.id}
            onClick={() => navigate(`/blog/${post.id}`)}
          >
            <img src={post.image} alt={post.title} />
            <div className="blog-card-info">
              <span className="blog-card-meta">{post.category} • {post.date}</span>
              <h3 className="blog-card-title">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
