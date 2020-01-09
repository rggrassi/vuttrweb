import axios from 'axios';
import { store } from '../store';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

api.interceptors.request.use(config => {
  const { token } = store.getState().auth;
  const headers = { ...config.headers };

  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

api.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    if (error.request) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default api;