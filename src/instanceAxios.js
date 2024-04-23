// axios.js
import axios from "axios";
import router from "./router/index"; // Import router Vue

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // Sesuaikan dengan URL API Laravel Anda
  timeout: 10000, // Sesuaikan dengan kebutuhan Anda
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Membuat interceptors untuk menambahkan token ke header permintaan
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Anda harus mengganti ini dengan cara Anda sendiri untuk mendapatkan token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Menangani kesalahan jika ada
    console.error("Request error:", error);
    // Redirect ke halaman login jika terjadi kesalahan
    router.push("/login");
    return Promise.reject(error);
  }
);

export default instance;
