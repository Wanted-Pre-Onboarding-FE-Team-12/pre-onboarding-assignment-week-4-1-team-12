import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import commonSlice from './commonSlice';
import userSlice from './userSlice';
import accountsReducer from './accountSlice';

const reducer = (state, action) => {
  return combineReducers({
    auth: authSlice,
    common: commonSlice,
    user: userSlice,
    userList: userSlice,
    account: accountsReducer,
  })(state, action);
};

export default reducer;
