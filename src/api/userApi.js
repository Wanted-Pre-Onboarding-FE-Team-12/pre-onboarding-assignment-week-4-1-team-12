import { authInstance } from './index';

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

export const deleteUser = async id => {
  const response = await authInstance.delete(`/users/${id}`);
  return response;
};
