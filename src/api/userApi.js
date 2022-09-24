// import { authInstance as instance } from './index';
import { instance } from './index';
import uuid from 'react-uuid';

export const getUserList = async () => {
  const response = await instance.get('/users');
  return response;
};

export const getUserDetail = async id => {
  const response = await instance.get(`/users/${id}`);
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
  const response = await instance.get(`/accounts?${urlString}`);
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
  const response = await instance.get(`/usersetting?${urlString}`);
  return response;
};

export const getStaffUser = async () => {
  const response = await instance.get('/usersetting?is_staff=true');
  return response;
};

export const getActiveUser = async () => {
  const response = await instance.get('/usersetting?is_active=true');
  return response;
};

export const getSearchUser = async text => {
  const response = await instance.get(`/users?q=${text}`);
  return response;
};

export const createUser = async (usersParams, settingParams) => {
  const now = new Date().toISOString();
  usersParams.uuid = uuid();
  usersParams.created_at = now;
  usersParams.updated_at = now;
  const response = await instance.post('/users', usersParams);
  const createdUuid = response.data.user.uuid;
  settingParams.uuid = createdUuid;
  settingParams.created_at = now;
  settingParams.updated_at = now;
  await instance.post('/usersetting', settingParams);
  return response;
};

export const updateUser = async (id, updateParams) => {
  const response = await instance.put(`/users/${id}`, updateParams);
  return response;
};

export const deleteUser = async id => {
  const response = await instance.delete(`/users/${id}`);
  return response;
};

// export const getUserList = async () => {
//   const response = await instance.get('/users');
//   return response;
// };
