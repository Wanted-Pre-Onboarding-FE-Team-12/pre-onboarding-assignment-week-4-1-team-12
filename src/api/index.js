import axios from 'axios';
import { getAccessToken } from '@utils/storage/token';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  config => {
    const accessToken = getAccessToken();
    console.log(accessToken);

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
