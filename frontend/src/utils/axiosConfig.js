import axios from "axios";

// Create an instance of axios with default configuration
const axiosInstance = axios.create({
  baseURL: "http://localhost:7000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to handle errors globally
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add auth headers or other modifications here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error.message);
    // Handle specific errors (e.g., unauthorized, network issues)
    return Promise.reject(error);
  }
);

export default axiosInstance;
