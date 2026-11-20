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

  const result = await res.json();
  if (!res.ok) {
    throw new Error(result.error || `Failed to send message (${res.status})`);
  }

  return result;
}

async function submitAuthRequest(action, data) {
  const res = await fetch(`${API_BASE}/auth/${action}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  if (!res.ok) {
    const error = new Error(result.message || "Authentication failed.");
    error.code = result.code;
    throw error;
  }

  return result;
}

export function loginUser(data) {
  return submitAuthRequest("login", data);
}

export function registerUser(data) {
  return submitAuthRequest("signup", data);
}
