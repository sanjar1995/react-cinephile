import axios from "axios";
import { useState } from "react";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {language: 'ru-RU'},
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
  }
});
export const useAxiosInterceptor = () => {
  const [loading, setLoading] = useState(false);

  // Перехватчик запросов
  api.interceptors.request.use(
    (config) => {
      setLoading(true);
      return config;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  // Перехватчик ответов
  api.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  return { loading };
};

export default api;
