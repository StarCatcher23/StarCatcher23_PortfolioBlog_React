import { useEffect, useRef, useState } from "react";
import "./Blog.css";
import aboutBg from "../../assets/Rectangle 4.png";
import visionBoard from "../../assets/visionboard.png";
import journeyImg from "../../assets/journeyImg.jpg";
import portfolioImg from "../../assets/portfolioImg.png";
import mentalImg from "../../assets/mentalImg.jpg";

import BlogPostList from "./BlogPostList";
import FeaturedArticle from "./FeaturedArticle";
import Modal from "../../components/Modal/Modal";
import ModalThumbnailGrid from "../../components/Modal/ModalThumbnailGrid";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null);
  const activeArticleRef = useRef(null);

  // Featured article content
  const featured = {
    title: "Future plans for My Blog Template",
    preview:
      "We have big plans for My Blog. First, some different setups for menus, blog & portfolio pages...",
    image: visionBoard, // <-- correct
    fullText:
      "Here is the full article text that will appear inside the modal...",
  };

  // Your blog posts (the "cards")
  const [posts] = useState([
    {
      id: 1,
      title: "My Journey Into Web Development",
      preview: "How I transitioned from healthcare to tech...",
      fullText:
        "Full article content for My Journey Into Web Development goes here...",
      date: "July 2026",
      image: journeyImg,
    },
    {
      id: 2,
      title: "Building My Portfolio From Scratch",
      preview: "Design choices, React components, and lessons learned...",
      fullText:
        "Full article content for Building My Portfolio From Scratch goes here...",
      date: "July 2026",
      image: portfolioImg,
    },
    {
      id: 3,
      title: "Mental Health + Coding",
      preview: "How I balance creativity, learning, and self-care...",
      fullText: "Full article content for Mental Health + Coding goes here...",
      date: "July 2026",
      image: mentalImg,
    },
  ]);

  // Filter posts by search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Open modal for ANY article
  const openArticleModal = (article) => {
    setActiveArticle(article);
    setIsModalOpen(true);

    setTimeout(() => {
      activeArticleRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  useEffect(() => {
    if (!isModalOpen || !activeArticleRef.current) return;

    activeArticleRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [isModalOpen, activeArticle]);

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

      {/* FEATURED ARTICLE */}
      <div ref={activeArticleRef}>
        <FeaturedArticle
          article={featured}
          onOpen={() => openArticleModal(featured)}
        />
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {activeArticle && (
          <>
            <div className="modal-article">
              <div className="modal-article-image">
                <img src={activeArticle.image} alt={activeArticle.title} />
              </div>

              <div className="modal-article-text">
                <h2 className="modal-title">{activeArticle.title}</h2>
                <p className="modal-body">{activeArticle.fullText}</p>
              </div>
            </div>

            {/* THUMBNAIL GRID */}
            {activeArticle.thumbnails && (
              <ModalThumbnailGrid items={activeArticle.thumbnails} />
            )}
          </>
        )}
      </Modal>

      {/* SEARCH FORM */}
      <div className="blog-search">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* BLOG POSTS */}
      <BlogPostList
        posts={filteredPosts}
        onOpen={(post) => openArticleModal(post)}
      />
    </div>
  );
};

export default Blog;
