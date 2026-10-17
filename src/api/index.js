import { API_BASE } from "./config.js";

// Fetch all blog posts
export async function fetchPosts() {
  const res = await fetch(`${API_BASE}/posts`);
  if (!res.ok) {
    throw new Error(`Failed to fetch posts (${res.status})`);
  }
  return res.json();
}

// Send contact form message
export async function sendMessage(data) {
  const res = await fetch(`${API_BASE}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}
