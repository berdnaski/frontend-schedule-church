import { AUTH_TOKEN } from "@/lib/constants/query-constants";
import axios, { InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const onFulfilledRequest = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(AUTH_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

api.interceptors.request.use(onFulfilledRequest);

export { api };
