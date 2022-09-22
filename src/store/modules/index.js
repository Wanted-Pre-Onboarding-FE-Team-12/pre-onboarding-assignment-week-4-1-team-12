import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import commonSlice from './commonSlice';
import accountSlice from './accountSlice';

const reducer = (state, action) => {
  return combineReducers({
    auth: authSlice,
    common: commonSlice,
    account: accountSlice,
  })(state, action);
};

export default reducer;
