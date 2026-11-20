import BlogPostCard from "./BlogPostCard";

const BlogPostList = ({
  posts,
  onOpen,
  user,
  token,
  interactions,
  interactionsLoading,
  interactionsError,
  onLoginRequest,
  onLikeChange,
  onSaveChange,
}) => {
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
          user={user}
          token={token}
          liked={interactions.likedPostIds.includes(post.id)}
          saved={interactions.savedPostIds.includes(post.id)}
          interactionsLoading={interactionsLoading}
          interactionsError={interactionsError}
          onLoginRequest={onLoginRequest}
          onLikeChange={onLikeChange}
          onSaveChange={onSaveChange}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
};

export default BlogPostList;
