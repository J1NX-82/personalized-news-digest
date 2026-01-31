import axios from "axios";

// Use the env var when provided, otherwise fall back to localhost for local development.
const DEFAULT_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: DEFAULT_BASE_URL,
});

export default api;
