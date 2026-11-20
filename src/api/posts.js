import { API_BASE } from "./config.js";

async function request(path, { token, ...options } = {}) {
  const headers = new Headers(options.headers || {});
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || `Request failed (${response.status})`);
  }

  return result;
}

export async function fetchPosts() {
  return request("/posts");
}

export function fetchPostInteractions(token) {
  return request("/posts/interactions", { token });
}

export function togglePostLike(postId, token) {
  return request(`/posts/${encodeURIComponent(postId)}/like`, {
    method: "POST",
    token,
  });
}

export function togglePostSave(postId, token) {
  return request(`/posts/${encodeURIComponent(postId)}/save`, {
    method: "POST",
    token,
  });
}

export function fetchPostComments(postId) {
  return request(`/posts/${encodeURIComponent(postId)}/comments`);
}

export function addPostComment(postId, content, token) {
  return request(`/posts/${encodeURIComponent(postId)}/comments`, {
    method: "POST",
    token,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
}
