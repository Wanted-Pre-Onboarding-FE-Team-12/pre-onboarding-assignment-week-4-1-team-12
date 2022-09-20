import { getAccessToken } from '@utils/storage/token';
import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getAccessToken()}`,
  },
});
