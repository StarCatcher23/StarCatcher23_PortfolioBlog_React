import { API_BASE } from "./config.js";

export async function fetchPosts() {
  const response = await fetch(`${API_BASE}/api/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}
