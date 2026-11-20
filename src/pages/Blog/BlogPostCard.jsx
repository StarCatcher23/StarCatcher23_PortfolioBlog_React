import { useState } from "react";
import {
  addPostComment,
  fetchPostComments,
  togglePostLike,
  togglePostSave,
} from "../../api/posts.js";
import "./BlogPost.css";

const BlogPostCard = ({
  post,
  onOpen,
  user,
  token,
  liked,
  saved,
  interactionsLoading,
  interactionsError,
  onLoginRequest,
  onLikeChange,
  onSaveChange,
  style,
}) => {
  const [likeCount, setLikeCount] = useState(post.likesCount || 0);
  const [commentCount, setCommentCount] = useState(post.commentsCount || 0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [commentsLoaded, setCommentsLoaded] = useState(false);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const [actionError, setActionError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  const isLoggedIn = Boolean(user && token);
  const isLiked = liked;
  const isSaved = saved;

  async function handleLike() {
    if (!isLoggedIn) {
      onLoginRequest();
      return;
    }

    setActionError("");
    setIsLiking(true);
    try {
      const result = await togglePostLike(post.id, token);
      setLikeCount(result.likesCount);
      onLikeChange(post.id, result.liked);
    } catch (error) {
      setActionError(error.message);
    } finally {
      setIsLiking(false);
    }
  }

  async function handleSave() {
    if (!isLoggedIn) {
      onLoginRequest();
      return;
    }

    setActionError("");
    setIsSaving(true);
    try {
      const result = await togglePostSave(post.id, token);
      onSaveChange(post.id, result.saved);
    } catch (error) {
      setActionError(error.message);
    } finally {
      setIsSaving(false);
    }
  }

  async function handleToggleComments() {
    const shouldOpen = !commentsOpen;
    setCommentsOpen(shouldOpen);

    if (!shouldOpen || commentsLoaded) return;

    setActionError("");
    setCommentsLoading(true);
    try {
      const result = await fetchPostComments(post.id);
      setComments(result);
      setCommentsLoaded(true);
    } catch (error) {
      setActionError(error.message);
    } finally {
      setCommentsLoading(false);
    }
  }

  async function handleCommentSubmit(event) {
    event.preventDefault();
    if (!isLoggedIn) {
      onLoginRequest();
      return;
    }

    const content = commentText.trim();
    if (!content) return;

    setActionError("");
    setCommentSubmitting(true);
    try {
      const result = await addPostComment(post.id, content, token);
      setComments((currentComments) => [...currentComments, result.comment]);
      setCommentCount(result.commentsCount);
      setCommentText("");
      setCommentsLoaded(true);
    } catch (error) {
      setActionError(error.message);
    } finally {
      setCommentSubmitting(false);
    }
  }

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

        <section
          className="blog__engagement"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="blog__engagement-actions">
            <button
              type="button"
              className={`blog__like-button ${isLiked ? "blog__like-button_liked" : ""}`}
              aria-label={isLiked ? "Unlike article" : "Like article"}
              aria-pressed={isLiked}
              disabled={isLiking || interactionsLoading || Boolean(interactionsError)}
              onClick={handleLike}
            >
              <span aria-hidden="true">{isLiked ? "♥" : "♡"}</span>
              <span>{likeCount}</span>
            </button>

            <button
              type="button"
              className="blog__save-button"
              aria-pressed={isSaved}
              disabled={
                isSaving || interactionsLoading || Boolean(interactionsError)
              }
              onClick={handleSave}
            >
              {isSaved ? "Saved" : "Save article"}
            </button>

            <button
              type="button"
              className="blog__comments-toggle"
              aria-expanded={commentsOpen}
              onClick={handleToggleComments}
            >
              {commentsOpen ? "Hide comments" : `Comments (${commentCount})`}
            </button>
          </div>

          {interactionsError && (
            <p className="blog__interaction-error" role="alert">
              {interactionsError}
            </p>
          )}

          {commentsOpen && (
            <div className="blog__comments">
              {commentsLoading && <p>Loading comments...</p>}
              {!commentsLoading && comments.length === 0 && (
                <p>No comments yet.</p>
              )}
              {comments.map((comment) => (
                <div className="blog__comment" key={comment._id}>
                  <strong>{comment.authorName}</strong>
                  <p>{comment.content}</p>
                </div>
              ))}

              {isLoggedIn ? (
                <form
                  className="blog__comment-form"
                  onSubmit={handleCommentSubmit}
                >
                  <label htmlFor={`comment-${post.id}`}>Add a comment</label>
                  <textarea
                    id={`comment-${post.id}`}
                    value={commentText}
                    maxLength={2000}
                    required
                    onChange={(event) => setCommentText(event.target.value)}
                  />
                  <button type="submit" disabled={commentSubmitting}>
                    {commentSubmitting ? "Posting..." : "Post comment"}
                  </button>
                </form>
              ) : (
                <p className="blog__login-prompt">
                  <button type="button" onClick={onLoginRequest}>
                    Log in
                  </button>{" "}
                  to like, save, or comment.
                </p>
              )}
            </div>
          )}

          {actionError && (
            <p className="blog__interaction-error" role="alert">
              {actionError}
            </p>
          )}
        </section>
      </div>
    </article>
  );
};

export default BlogPostCard;
