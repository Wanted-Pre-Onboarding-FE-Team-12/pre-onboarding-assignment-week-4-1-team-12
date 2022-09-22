import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import commonSlice from './commonSlice';
import userSlice from './userSlice';

const reducer = (state, action) => {
  return combineReducers({
    auth: authSlice,
    common: commonSlice,
    userList: userSlice,
  })(state, action);
};

export default reducer;
