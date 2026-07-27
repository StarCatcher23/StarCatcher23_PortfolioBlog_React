const FeaturedArticle = ({ article, onOpen }) => {
  return (
    <div className="featured-article">
      {/*Left-Side -Text */}
      <div className="featured-text">
        <h2 className="featured-heading">LATEST IN BLOG</h2>
        <h3 className="featured-title">{article.title}</h3>
        <p className="featured-preview">{article.preview}</p>

        <button className="featured-readmore" onClick={onOpen}>
          READ MORE
        </button>
      </div>

      {/*RIGHT SIDE -IMAGE */}
      <div className="featured-image">
        <img src={article.image} alt={article.title} />
      </div>
    </div>
  );
};

export default FeaturedArticle;
