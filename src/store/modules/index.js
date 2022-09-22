import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import commonSlice from './commonSlice';
import accountsReducer from './accountSlice';

const reducer = (state, action) => {
  return combineReducers({
    auth: authSlice,
    common: commonSlice,
    account: accountsReducer,
  })(state, action);
};

export default reducer;
