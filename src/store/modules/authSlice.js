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
    LoadUser(state) {
      const token = getAccessToken();

      if (token) {
        const { email, sub } = jwtDecode(token);
        state.token = token;
        state.email = email;
        state._id = +sub;
        state.userLoaded = true;
        state.isLoggedIn = true;
      }
    },

    Logout(state) {
      removeAccessToken();
      state.token = null;
      state.email = '';
      state._id = '';
      state.isLoggedIn = false;
      state.userLoaded = false;
      useToastMessage(TOAST_MESSAGE.AUTH.LOGOUT_SUCCESS, 'warning');
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.fetchLoginState = 'LOADING';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.fetchLoginState = 'SUCCESS';
      state.token = action.payload.accessToken;

      const { email, sub } = jwtDecode(action.payload.accessToken);
      state.email = email;
      state._id = +sub;
      state.userLoaded = true;
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

export const { LoadUser, Logout } = authSlice.actions;
export default authSlice.reducer;
