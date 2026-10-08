const FeaturedArticle = ({ article, onOpen }) => {
  return (
    <div className="featured__article">
      {/* Left-Side - Text */}
      <div className="featured__text">
        <h2 className="featured__heading">LATEST IN BLOG</h2>
        <h3 className="featured__title">{article.title}</h3>

        <div className="featured__preview">
          {article.preview.split("\n").map((line, i) => (
            <p key={i} style={{ textIndent: "1.5rem", marginBottom: "1rem" }}>
              {line}
            </p>
          ))}
        </div>

        <button className="featured__readmore" onClick={onOpen}>
          READ MORE
        </button>
      </div>

      {/* Right-Side - Image */}
      <div className="featured__image">
        <img src={article.image} alt={article.title} />
      </div>
    </div>
  );
};

export default FeaturedArticle;
