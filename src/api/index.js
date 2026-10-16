import { API_BASE } from "./config.js";

// Fetch all blog posts from the backend.
// This will be used inside your Blog page to load posts dynamically.
export async function fetchPosts() {
  const res = await fetch(`${API_BASE}/posts`);
  return res.json(); // Convert the response into JSON
}

// Send a contact form message to the backend.
// This triggers POST /api/messages and stores the message in MongoDB.
export async function sendMessage(data) {
  const res = await fetch(`${API_BASE}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // Tell backend we're sending JSON
    body: JSON.stringify(data), // Convert JS object → JSON string
  });

  return res.json(); // Return the backend response
}
