const BlogPostCard = ({ post, onOpen }) => {
  return (
    <div className="blog-post-card" onClick={() => onOpen(post)}>
      <div className="blog-post-image-wrapper">
        <img src={post.image} alt={post.title} className="blog-post-image" />
      </div>

      <div className="blog-post-card-body">
        <h2 className="blog-post-title">{post.title}</h2>
        <span className="blog-post-date">{post.date}</span>
      </div>
    </div>
  );
};

export default BlogPostCard;
