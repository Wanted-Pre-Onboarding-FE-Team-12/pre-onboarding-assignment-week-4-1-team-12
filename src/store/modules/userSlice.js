import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as userApi from '@api/userApi';

export const getUser = createAsyncThunk('users', async () => {
  const response = await userApi.getUserList();
  return response.data;
});

export const getAccount = createAsyncThunk('accounts', async userIdArray => {
  const response = await userApi.getUserAccounts(userIdArray);
  return response.data;
});

export const getUserSetting = createAsyncThunk('userSetting', async userUuidArray => {
  const response = await userApi.getUserSettings(userUuidArray);
  return response.data;
});

export const deleteUser = createAsyncThunk('deleteUser', async id => {
  await userApi.deleteUser(id);
});

export const getStaffUser = createAsyncThunk('staffUser', async () => {
  const response = await userApi.getStaffUser();
  return response.data;
});

export const getActiveUser = createAsyncThunk('activeUser', async () => {
  const response = await userApi.getActiveUser();
  return response.data;
});

export const getSearchUser = createAsyncThunk('searchUser', async text => {
  const response = await userApi.getSearchUser(text);
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

  reducers: {
    select(state, action) {
      state.text = action.payload;
    },
    updateData(state, action) {
      state.updated = !state.updated;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(getAccount.fulfilled, (state, action) => {
      state.account = action.payload;
    });
    builder.addCase(getUserSetting.fulfilled, (state, action) => {
      state.userSetting = action.payload;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users.filter(user => user.id !== action.payload);
    });
    builder.addCase(getStaffUser.fulfilled, (state, action) => {
      state.staffUser = action.payload;
    });
    builder.addCase(getActiveUser.fulfilled, (state, action) => {
      state.activeUser = action.payload;
    });
    builder.addCase(getSearchUser.fulfilled, (state, action) => {
      state.searchUser = action.payload;
    });
  },
});

export const { select, updateData } = userSlice.actions;
export const { loadUser } = userSlice.actions;
export default userSlice.reducer;
