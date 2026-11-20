import { useEffect, useState } from "react";
import {
  addPostComment,
  fetchPostComments,
  togglePostLike,
  togglePostSave,
} from "../../api/posts.js";
import "./BlogPost.css";

const BlogPostInteractions = ({
  post,
  user,
  token,
  liked,
  saved,
  interactionsLoading,
  interactionsError,
  onLoginRequest,
  onLikeChange,
  onSaveChange,
}) => {
  const [likeCount, setLikeCount] = useState(post.likesCount || 0);
  const [commentCount, setCommentCount] = useState(post.commentsCount || 0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const [actionError, setActionError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  const isLoggedIn = Boolean(user && token);

  useEffect(() => {
    let cancelled = false;

    fetchPostComments(post.id)
      .then((result) => {
        if (!cancelled) {
          setComments(result);
        }
      })
      .catch((error) => {
        if (!cancelled) setActionError(error.message);
      })
      .finally(() => {
        if (!cancelled) setCommentsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [post.id]);

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
    } catch (error) {
      setActionError(error.message);
    } finally {
      setCommentSubmitting(false);
    }
  }

  return (
    <section className="blog__engagement">
      <div className="blog__engagement-actions">
        <button
          type="button"
          className={`blog__like-button ${liked ? "blog__like-button_liked" : ""}`}
          aria-label={liked ? "Unlike article" : "Like article"}
          aria-pressed={liked}
          disabled={
            isLiking || interactionsLoading || Boolean(interactionsError)
          }
          onClick={handleLike}
        >
          <span aria-hidden="true">{liked ? "♥" : "♡"}</span>
          <span>{likeCount}</span>
        </button>

        <button
          type="button"
          className={`blog__save-button ${saved ? "blog__save-button_saved" : ""}`}
          aria-pressed={saved}
          aria-label={saved ? "Remove saved article" : "Save article"}
          disabled={
            isSaving || interactionsLoading || Boolean(interactionsError)
          }
          onClick={handleSave}
        >
          <svg
            className="blog__bookmark-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M6.5 4.5h11v15l-5.5-3.5-5.5 3.5v-15z"
              fill={saved ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
          {saved ? "Saved" : "Save article"}
        </button>

      </div>

      {interactionsError && (
        <p className="blog__interaction-error" role="alert">
          {interactionsError}
        </p>
      )}

      <div className="blog__comments">
        <h3>Comments ({commentCount})</h3>
        {commentsLoading && <p>Loading comments...</p>}
        {!commentsLoading && comments.length === 0 && <p>No comments yet.</p>}
        {comments.map((comment) => (
          <div className="blog__comment" key={comment._id}>
            <strong>{comment.authorName}</strong>
            <p>{comment.content}</p>
          </div>
        ))}

        {isLoggedIn ? (
          <form className="blog__comment-form" onSubmit={handleCommentSubmit}>
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

      {actionError && (
        <p className="blog__interaction-error" role="alert">
          {actionError}
        </p>
      )}
    </section>
  );
};

export default BlogPostInteractions;
