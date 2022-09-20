import { instance } from './index';

export const signin = async formData => {
  const response = await instance.post('/login', formData);
  return response;
};
