import { useState } from "react";
import "./Blog.css";
import aboutBg from "../../assets/Rectangle 4.png";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="blog-page">
      {/* HEADER */}
      <section className="blog-header">
        <section
          className="blog-background-image"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <h1>Articles</h1>
        </section>
      </section>

      {/* SEARCH FORM */}
      <div className="blog-search">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Later: filter your posts using searchTerm */}
    </div>
  );
};

export default Blog;
