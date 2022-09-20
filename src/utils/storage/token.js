import {
  setValueToLocalStorage,
  getValueFromLocalStorage,
  deleteValueFromLocalStorage,
} from './localStorage';

const STORAGE_KEY = 'accessToken';

export const setAccessToken = token => {
  setValueToLocalStorage(STORAGE_KEY, token);
};

export const getAccessToken = () => {
  const accessToken = getValueFromLocalStorage(STORAGE_KEY);
  return accessToken;
};

export const removeAccessToken = () => {
  deleteValueFromLocalStorage(STORAGE_KEY);
};
