import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BlogDetails.css";

const blogsData = [
  {
    id: 1,
    title: "Bienfaits des fruits secs",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post18-copyright.jpg",
    content: `
      Les fruits secs sont une excellente source de nutriments essentiels.
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate tempor placerat.

      ❝ Ces aliments naturels sont riches en fibres et bons gras. Mettez-les dans votre routine. ❞

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel augue ultricies, pulvinar nisl at, vehicula purus.
    `,
    category: "Nutrition",
    author: "Imed Rahal",
    date: "Juillet 2025",
  },
  {
    id: 2,
    title: "Routine sportive efficace",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post19-copyright.jpg",
    content: `
      Les fruits secs sont une excellente source de nutriments essentiels.
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate tempor placerat.

      ❝ Ces aliments naturels sont riches en fibres et bons gras. Mettez-les dans votre routine. ❞

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel augue ultricies, pulvinar nisl at, vehicula purus.
    `,
    category: "Sport",
    author: "Imed Rahal",
    date: "Juillet 2025",
  },
  {
    id: 3,
    title: "Pourquoi bien dormir",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post22-copyright.jpg",
    content: `
      Les fruits secs sont une excellente source de nutriments essentiels.
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate tempor placerat.

      ❝ Ces aliments naturels sont riches en fibres et bons gras. Mettez-les dans votre routine. ❞

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel augue ultricies, pulvinar nisl at, vehicula purus.
    `,
    category: "Santé",
    author: "Imed Rahal",
    date: "Juillet 2025",
  },
    {
    id: 4,
    title: "Pourquoi bien dormir",
    image:"https://lab.axiomthemes.com/wp-content/uploads/2024/10/post22-copyright.jpg",
    content: `
      Les fruits secs sont une excellente source de nutriments essentiels.
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate tempor placerat.

      ❝ Ces aliments naturels sont riches en fibres et bons gras. Mettez-les dans votre routine. ❞

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel augue ultricies, pulvinar nisl at, vehicula purus.
    `,
    category: "Santé",
    author: "Imed Rahal",
    date: "Juillet 2025",
  },
    {
    id: 5,
    title: "Pourquoi bien dormir",
    image:"https://lab.axiomthemes.com/wp-content/uploads/2024/10/post22-copyright.jpg",
    content: `
      Les fruits secs sont une excellente source de nutriments essentiels.
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate tempor placerat.

      ❝ Ces aliments naturels sont riches en fibres et bons gras. Mettez-les dans votre routine. ❞

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel augue ultricies, pulvinar nisl at, vehicula purus.
    `,
    category: "Santé",
    author: "Imed Rahal",
    date: "Juillet 2025",
  },
    {
    id: 6,
    title: "Pourquoi bien dormir",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post22-copyright.jpg",
    content:`
      Les fruits secs sont une excellente source de nutriments essentiels.
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate tempor placerat.

      ❝ Ces aliments naturels sont riches en fibres et bons gras. Mettez-les dans votre routine. ❞

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel augue ultricies, pulvinar nisl at, vehicula purus.
    `,
    category: "Santé",
    author: "Imed Rahal",
    date: "Juillet 2025",
  },
   {
    id: 7,
    title: "Pourquoi bien dormir",
    image: "https://lab.axiomthemes.com/wp-content/uploads/2024/10/post22-copyright.jpg",
    content:`
      Les fruits secs sont une excellente source de nutriments essentiels.
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate tempor placerat.

      ❝ Ces aliments naturels sont riches en fibres et bons gras. Mettez-les dans votre routine. ❞

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel augue ultricies, pulvinar nisl at, vehicula purus.
    `,
    category: "Santé",
    author: "Imed Rahal",
    date: "Juillet 2025",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogsData.find((b) => b.id === parseInt(id));

  const related = blogsData.filter((b) => b.id !== blog.id && b.category === blog.category);

  if (!blog) return <div>Article introuvable</div>;

  return (
    <div className="blog-detail-page">
      <div className="blog-header" style={{ backgroundImage: `url(${blog.image})` }}>
        <div className="overlay">
          <span className="blog-category">{blog.category}</span>
          <h1>{blog.title}</h1>
          <div className="meta">
            <span>🖋 {blog.author}</span> • <span>{blog.date}</span> • <span>0 commentaires</span>
          </div>
        </div>
      </div>

      <div className="blog-content">
        {blog.content.split("\n").map((paragraph, index) => {
          if (paragraph.includes("❝")) {
            return <blockquote key={index}>{paragraph.replace("❝", "").replace("❞", "")}</blockquote>;
          } else if (paragraph.includes("http")) {
            return <img key={index} src={paragraph.trim()} alt="Blog" className="inline-image" />;
          } else {
            return <p key={index}>{paragraph.trim()}</p>;
          }
        })}
      </div>

      {related.length > 0 && (
        <div className="related-articles">
          <h3>Articles similaires</h3>
          <div className="related-grid">
            {related.map((item) => (
              <div
                key={item.id}
                className="related-card"
                onClick={() => navigate(`/blog/${item.id}`)}
              >
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
