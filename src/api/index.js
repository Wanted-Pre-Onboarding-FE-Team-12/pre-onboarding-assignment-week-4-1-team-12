import { getAccessToken } from '@utils/storage/token';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://fint-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authInstance = axios.create({
  baseURL: 'https://fint-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getAccessToken()}`,
  },
});
