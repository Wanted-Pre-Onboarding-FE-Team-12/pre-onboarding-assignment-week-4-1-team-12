import { authInstance } from './index';

export const getUserList = async () => {
  const response = await authInstance.get('/users');
  console.log(response);
  return response;
};
