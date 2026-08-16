const API_KEY = import.meta.env.VITE_MY_API_KEY;
const BASE_URL = "https://api.example.com/v1";

export const getArticles = async (query) => {
  try {
    const res = await fetch(`${BASE_URL}/search?q=${query}&key=${API_KEY}`);
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
