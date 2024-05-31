import axios from "axios";
import config from "@/config";

const request = axios.create({
  baseURL: config.baseURL,
  timeout: config.requestTimeout,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function errorHandler(error: any) {
  if (error.response) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.replace("/login");
    }
    return Promise.reject(error.response);
  }
  if (error.request) {
    return Promise.reject(error.request);
  }
  return Promise.reject(error);
}

request.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}, errorHandler);

request.interceptors.response.use((response) => {
  return response.data;
}, errorHandler);

export default request;
