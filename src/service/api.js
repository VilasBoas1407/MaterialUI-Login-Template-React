import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:44330/api/",
});

export default api;
