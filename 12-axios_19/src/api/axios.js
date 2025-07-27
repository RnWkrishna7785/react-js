import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",  // Base URL for the API
    timeout: 10000,  // Request timeout in milliseconds                                                       
    headers: {
        "Content-Type": "application/json",  // Default content type for requests
    },
});

export { axiosInstance};