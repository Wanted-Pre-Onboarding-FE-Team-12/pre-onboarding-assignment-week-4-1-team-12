import { authInstance } from './index';

/** account list */
export const getAccountList = async () => {
  const response = await authInstance.get('/accounts');
  return response;
};

/** account status */
export const getAccountStatusList = async () => {
  const response = await authInstance.get('/accountStatus');
  return response;
};

/** broker list */
export const getBrokerList = async () => {
  const response = await authInstance.get('/brokers');
  return response;
};

/** broker format */
export const getBrokerFormatList = async () => {
  const response = await authInstance.get('/brokerFormat');
  return response;
};
