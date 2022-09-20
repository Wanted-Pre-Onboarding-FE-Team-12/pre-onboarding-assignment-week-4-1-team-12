import { authInstance } from './index';

export const getAccountList = async () => {
  const response = await authInstance.get('/accounts');
  return response;
};
