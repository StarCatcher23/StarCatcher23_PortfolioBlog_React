import BlogPostCard from "./BlogPostCard";

const BlogPostList = ({ posts, onOpen }) => {
  if (!posts || posts.length === 0) {
    return <p className="blog__empty">No articles found.</p>;
  }

  return (
    <div className="blog__list">
      {posts.map((post, index) => (
        <BlogPostCard
          key={post.id}
          post={post}
          onOpen={onOpen}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
};

export default BlogPostList;
