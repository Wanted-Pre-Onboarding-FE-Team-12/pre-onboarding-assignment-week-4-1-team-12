import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

import useToastMessage from '@hooks/useToastMessage';
import { TOAST_MESSAGE } from '@utils/toastMessage';
import * as authApi from '@api/authApi';
import { getAccessToken, removeAccessToken, setAccessToken } from '@utils/storage/token';

const initialState = {
  fetchLoginState: '',
  token: null,
  email: '',
  _id: '',
  isLoggedIn: false,
  userLoaded: false,
};

export const login = createAsyncThunk('auth/login', async (formData, { rejectWithValue }) => {
  try {
    const response = await authApi.signin(formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadUser(state) {
      const token = getAccessToken();

      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          email: user.email,
          _id: +user.sub,
          userLoaded: true,
          isLoggedIn: true,
        };
      }
    },

    logout() {
      removeAccessToken();
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.fetchLoginState = 'LOADING';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.fetchLoginState = 'SUCCESS';
      state.isLoggedIn = true;
      setAccessToken(action.payload.accessToken);
      useToastMessage(TOAST_MESSAGE.AUTH.LOGIN_SUCCESS, 'success');
    });
    builder.addCase(login.rejected, state => {
      state.fetchLoginState = 'ERROR';
      useToastMessage(TOAST_MESSAGE.AUTH.LOGIN_FAIL, 'error');
    });
  },
});

export const { loadUser, logout } = authSlice.actions;
export default authSlice.reducer;
