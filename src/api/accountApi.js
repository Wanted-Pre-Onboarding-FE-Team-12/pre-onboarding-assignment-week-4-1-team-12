import queryString from 'query-string';
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

/** account detail */
export const getAccountDetail = async id => {
  const response = await authInstance.get(`/accounts/${id}`);
  return response.data;
};

/**
 * filtering & search
 * issue
 * search 범위가 account list response data들에 한해서만 가능함.
 *  ex) uuid가 검색 됨
 *  ex) 한글 증권사 검색 불가능
 *  ex) 고객명 한글 검색 불가, user_id로 검색 가능 (number)
 * */
export const getAccounts = async query => {
  const queryStr = queryString.stringify(query, { skipEmptyString: true, skipNull: true });
  const response = await authInstance.get(`/accounts?${queryStr}`);
  return response;
};
