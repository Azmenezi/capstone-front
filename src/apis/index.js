import axios from "axios";
import { getToken } from "./auth/storage";

const BASE_URL = "http://192.168.8.25:8000";
// const BASE_URL = "http://192.168.8.59:8080";
// const BASE_URL = "http://localhost:8000";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { instance, BASE_URL };
