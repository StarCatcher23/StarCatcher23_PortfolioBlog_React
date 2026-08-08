import "./BlogPost.css";

const BlogPostCard = ({ post, onOpen }) => {
  return (
    <div className="blog__card" onClick={() => onOpen(post)}>
      <div className="blog__image-wrapper">
        <img src={post.image} alt={post.title} className="blog__image" />
      </div>

      <div className="blog__card-body">
        <h2 className="blog__title">{post.title}</h2>
        <span className="blog__date">{post.date}</span>
      </div>
    </div>
  );
};

export default BlogPostCard;
