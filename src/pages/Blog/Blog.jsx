import { useEffect, useRef, useState } from "react";
import "./Blog.css";
import aboutBg from "../../assets/Rectangle 4.png";
import visionBoard from "../../assets/visionboard.png";

import BlogPostList from "./BlogPostList";
import FeaturedArticle from "./FeaturedArticle";
import Modal from "../../components/Modal/Modal";
import ModalThumbnailGrid from "../../components/Modal/ModalThumbnailGrid";
import { fetchPosts } from "../../api";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const [postsError, setPostsError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null);
  const activeArticleRef = useRef(null);

  // Fetch posts from the API on mount
  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch((error) => {
        console.error("Unable to load blog posts:", error);
        setPostsError(error.message);
      });
  }, []);

  // Featured article content
  const featured = {
    title: "Future plans for My Blog Template",
    preview:
      "We have big plans for My Blog. First, some different setups for menus, blog & portfolio pages...",
    image: visionBoard,
    fullText: (
      <>
        <p>
          As I continue building my portfolio and blog website, new ideas keep
          coming to mind — ideas that will make the site more functional, more
          interactive, and more aesthetically pleasing. I plan to write more
          articles to grow the blog section, and eventually I want to add
          features like a save article button, a like button, and a comment
          section.
        </p>

        <p>
          To make those features work properly, I know I’ll likely need to
          implement authentication and authorization — registration, login,
          sign‑in, and user profiles. That would allow users to save articles,
          leave comments, and like posts in a way that’s tied to their own
          account.
        </p>

        <p>
          I’m still deciding whether I should require registration for these
          features or allow some of them without an account. I’ll definitely
          talk to my peers and tutors to figure out what’s most practical. But
          realistically, if I want users to save articles, I’ll probably need
          authentication to make it work the right way.{" "}
        </p>
      </>
    ),
  };

  // Filter posts by search term
  const filteredPosts = posts.filter((post) =>
    (post.title || "").toLowerCase().includes(searchTerm.toLowerCase()),
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

  const articleBody = activeArticle?.fullText ?? activeArticle?.content;

  return (
    <div className="blog">
      {/* HEADER */}
      <section className="blog__header full-bleed">
        <section
          className="blog__background-image"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <h1 className="blog__title">Articles</h1>
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
            <div className="modal__article">
              <div className="modal__image">
                <img src={activeArticle.image} alt={activeArticle.title} />
              </div>

              <div className="modal__text">
                <h2 className="modal__title">{activeArticle.title}</h2>
                <div className="modal__body">
                  {typeof articleBody === "string"
                    ? (
                      <p
                        style={{
                          whiteSpace: "pre-line",
                          textIndent: "1.5rem",
                          marginBottom: "1rem",
                        }}
                      >
                        {articleBody}
                      </p>
                    )
                    : articleBody}
                </div>
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
      <div className="blog__search">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* BLOG POSTS (from API) */}
      {postsError ? (
        <p role="alert">Unable to load blog posts: {postsError}</p>
      ) : (
        <BlogPostList
          posts={filteredPosts.map((post) => ({
            ...post,
            id: post.id || post._id,
            preview: post.preview || post.content,
            fullText: post.fullText || post.content,
          }))}
          onOpen={(post) => openArticleModal(post)}
        />
      )}
    </div>
  );
};

export default Blog;
