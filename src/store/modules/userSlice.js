import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as userApi from '@api/userApi';

// export const getUser = createAsyncThunk('users', async () => {
//   const response = await userApi.getUserList();
//   return response.data;
// });

export const getAccount = createAsyncThunk('user/accounts', async userIdArray => {
  const response = await userApi.getUserAccount();
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    text: '',
    users: [],
    account: [],
    userSetting: [],
    staffUser: [],
    activeUser: [],
    searchUser: [],
    updated: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAccount.fulfilled, (state, action) => {
      state.account = action.payload;
    });
  },
});

export const { select, updateData } = userSlice.actions;
export default userSlice.reducer;
