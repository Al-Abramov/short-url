import axios, { AxiosRequestConfig } from 'axios';
import { getCookie } from '../utils/cookie';

const baseURL = 'http://79.143.31.216/';

const api = axios.create({ baseURL });

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = `Bearer ${getCookie('token')}`;
  return config;
});

export default api;
