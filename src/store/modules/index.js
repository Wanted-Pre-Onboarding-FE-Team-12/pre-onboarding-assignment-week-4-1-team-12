import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import commonSlice from './commonSlice';

const reducer = (state, action) => {
  return combineReducers({
    auth: authSlice,
    common: commonSlice,
  })(state, action);
};

export default reducer;
