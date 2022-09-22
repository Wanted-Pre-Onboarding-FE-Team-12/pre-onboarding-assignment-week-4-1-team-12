import { authInstance } from './index';

export const getAccountList = async () => {
  const response = await authInstance.get('/accounts');
  return response;
};

export const getBrokers = async () => {
  const response = await authInstance.get('/brokers');
  return response;
}

export const getBrokerFormat = async() => {
  const response = await authInstance.get('/brokersFormat');
  return response;
}

export const getAccountStatus = async() => {
  const response = await authInstance.get('/accountStatus');
  return response;
}