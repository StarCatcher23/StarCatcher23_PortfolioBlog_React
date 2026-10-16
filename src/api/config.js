const defaultApiBase = import.meta.env.DEV
  ? "http://localhost:3000/api"
  : "https://starcatcher23-portfolioblog-express.onrender.com/api";

export const API_BASE = (
  import.meta.env.VITE_API_BASE_URL || defaultApiBase
).replace(/\/+$/, "");
