const BlogPostList = ({ posts, onOpen }) => {
  if (!posts || posts.length === 0) {
    return <p className="blog__empty">No articles found.</p>;
  }

  return (
    <div className="blog__list">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className="blog__card fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => onOpen(post)}
        >
          {/* Image */}
          {post.image && (
            <div className="blog__card-image">
              <img src={post.image} alt={post.title} />
            </div>
          )}

          {/* Title */}
          <h2 className="blog__card-title">{post.title}</h2>

          {/* Date */}
          {post.date && <p className="blog__card-date">{post.date}</p>}
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
