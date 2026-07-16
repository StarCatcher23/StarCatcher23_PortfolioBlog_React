import { useEffect, useState } from "react";
import "./Blog.css";
import aboutBg from "../../assets/Rectangle 4.png";

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="blog-header">
        <section className="blog-background-image"
                    style={{ backgroundImage: `url(${aboutBg})` }}
                    >
          <h1>Articles</h1>
        </section>
      </section>
    </div>
  );
};

export default Blog;
