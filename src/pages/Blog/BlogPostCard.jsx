import "./BlogPost.css";

const BlogPostCard = ({ post, onOpen, style }) => {
  return (
    <article
      className="blog__card fade-in"
      style={style}
      onClick={() => onOpen(post)}
    >
      {post.image && (
        <div className="blog__card-image">
          <img src={post.image} alt={post.title} />
        </div>
      )}

      <div className="blog__card-body">
        <h2 className="blog__card-title">{post.title}</h2>
        {post.date && <p className="blog__card-date">{post.date}</p>}
      </div>
    </article>
  );
};

export default BlogPostCard;
