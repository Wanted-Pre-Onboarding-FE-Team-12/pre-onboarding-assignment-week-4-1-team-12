import { authInstance } from './index';

export const getUserList = async () => {
  const response = await authInstance.get('/users');
  return response;
};

export const getUserDetail = async id => {
  const response = await authInstance.get(`/users/${id}`);
  return response;
};

export const getUserAccount = async () => {
  const response = await authInstance.get('/accounts');
  return response;
};
