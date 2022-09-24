import axios from 'axios';
import { getAccessToken } from '@utils/storage/token';

export const instance = axios.create({
  baseURL: 'https://fint-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  config => {
    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }
    return config;
  },
  error => {
    console.log(error, 'error');
    return;
  },
);
