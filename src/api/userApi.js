import { instance } from './index';

export const getUserList = async () => {
  const response = await instance.get('/users');
  return response;
};
