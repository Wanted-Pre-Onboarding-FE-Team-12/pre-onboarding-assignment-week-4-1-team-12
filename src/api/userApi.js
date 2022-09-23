import { authInstance } from './index';

export const getUserList = async () => {
  const response = await authInstance.get('/users');
  return response;
};
