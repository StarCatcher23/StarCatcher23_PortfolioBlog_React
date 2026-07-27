import BlogPostCard from "./BlogPostCard";

const BlogPostList = ({ posts, onOpen }) => {
  return (
    <div className="blog-post-list">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} onOpen={onOpen} />
      ))}
    </div>
  );
};

export default BlogPostList;
