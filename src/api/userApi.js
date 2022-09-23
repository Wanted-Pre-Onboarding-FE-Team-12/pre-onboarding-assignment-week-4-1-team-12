import { authInstance } from './index';
import uuid from 'react-uuid';

export const getUserList = async () => {
  const response = await authInstance.get('/users');
  return response;
};

export const getUserAccounts = async userIdArray => {
  let urlString = '';
  userIdArray.forEach((item, index) => {
    urlString += `user_id=${item}`;
    if (index !== userIdArray.length - 1) {
      urlString += '&';
    }
  });
  const response = await authInstance.get(`/accounts?${urlString}`);
  return response;
};

export const getUserSettings = async userUuidArray => {
  let urlString = '';
  userUuidArray.forEach((item, index) => {
    urlString += `uuid=${item}`;
    if (index !== userUuidArray.length - 1) {
      urlString += '&';
    }
  });
  const response = await authInstance.get(`/usersetting?${urlString}`);
  return response;
};

export const getStaffUser = async () => {
  const response = await authInstance.get('/usersetting?is_staff=true');
  return response;
};

export const getActiveUser = async () => {
  const response = await authInstance.get('/usersetting?is_active=true');
  return response;
};

export const getSearchUser = async text => {
  const response = await authInstance.get(`/users?q=${text}`);
  return response;
};

export const createUser = async (usersParams, settingParams) => {
  const now = new Date().toISOString();
  usersParams.uuid = uuid();
  usersParams.created_at = now;
  usersParams.updated_at = now;
  const response = await authInstance.post('/users', usersParams);
  const createdUuid = response.data.user.uuid;
  settingParams.uuid = createdUuid;
  settingParams.created_at = now;
  settingParams.updated_at = now;
  await authInstance.post('/usersetting', settingParams);
  return response;
};

export const updateUser = async (id, updateParams) => {
  const response = await authInstance.put(`/users/${id}`, updateParams);
  return response;
};

export const deleteUser = async id => {
  const response = await authInstance.delete(`/users/${id}`);
  return response;
};
