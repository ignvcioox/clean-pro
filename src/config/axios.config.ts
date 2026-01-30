import axios from 'axios';

export const baseURL = axios.create({
   baseURL: process.env.NEXT_PUBLIC_API_URL,
   timeout: 10000,
   headers: {
      "Content-Type": "application/json",
   },
   withCredentials: true,
})

/* baseURL.interceptors.request.use(
   (config) => {
      if (typeof window !== 'undefined') {
         const match = document.cookie.match(/(^|;)\s*token=([^;]+)/);
         const token = match ? match[2] : localStorage.getItem('token');
         if (token) {
            config.headers.Authorization = `Bearer ${token}`;
         }
      }
      return config;
   },
   (error) => Promise.reject(error)
); */