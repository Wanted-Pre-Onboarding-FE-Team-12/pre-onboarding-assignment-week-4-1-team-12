import {
  getAccountList,
  getBrokerList,
  getAccountStatusList,
  getBrokerFormatList,
} from '@api/accountApi';
import { getUserList } from '@api/userApi';
const { createReducer, createAsyncThunk } = require('@reduxjs/toolkit');

// get account list (계좌 리스트)
export const getAccounts = createAsyncThunk(
  'accounts/accountList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAccountList();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// 계좌 상태 정보
export const getAccountStatus = createAsyncThunk(
  'accounts/accountStatusList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAccountStatusList();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// get brokers list (은행 이름 리스트)
export const getBrokers = createAsyncThunk('brokers/brokerList', async (_, { rejectWithValue }) => {
  try {
    const response = await getBrokerList();
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// get brokers format list
export const getBrokerFormat = createAsyncThunk(
  'brokers/brokerFormat',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBrokerFormatList();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// get user list
export const getUsers = createAsyncThunk('users/userList', async (_, { rejectWithValue }) => {
  try {
    const response = await getUserList();
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// action
// const accountList = createAction('accounts/accountList');

const initialState = {
  accountList: [],
  accountStatusList: [],
  brokerList: [],
  brokerFormatList: [],
  userList: [],
};

const accountsReducer = createReducer(initialState, builder => {
  builder.addCase(getAccounts.fulfilled, (state, action) => {
    const spliceData = action.payload.splice(0, 20);
    state.accountList.push(spliceData);
  });
  builder.addCase(getAccounts.rejected, (state, action) => {
    state.accountList = [];
  });
  builder.addCase(getBrokers.fulfilled, (state, action) => {
    state.brokerList.push(action.payload);
  });
  builder.addCase(getBrokers.rejected, (state, action) => {
    state.brokerList = [];
  });
  builder.addCase(getAccountStatus.fulfilled, (state, action) => {
    state.accountStatusList.push(action.payload);
  });
  builder.addCase(getAccountStatus.rejected, (state, action) => {
    state.accountStatusList = [];
  });
  builder.addCase(getBrokerFormat.fulfilled, (state, action) => {
    state.brokerFormatList.push(action.payload);
  });
  builder.addCase(getBrokerFormat.rejected, (state, action) => {
    state.brokerFormatList = [];
  });
  builder.addCase(getUsers.fulfilled, (state, action) => {
    state.userList.push(action.payload);
  });
  builder.addCase(getUsers.rejected, (state, action) => {
    state.userList = [];
  });
  builder.addDefaultCase(state => state);
});

export default accountsReducer;
