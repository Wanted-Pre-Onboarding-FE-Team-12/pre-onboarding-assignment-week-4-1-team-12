import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';

const reducer = (state, action) => {
  return combineReducers({
    auth: authSlice,
  })(state, action);
};

export default reducer;
