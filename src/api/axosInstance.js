import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.first.org/data",
});

export default axiosInstance;