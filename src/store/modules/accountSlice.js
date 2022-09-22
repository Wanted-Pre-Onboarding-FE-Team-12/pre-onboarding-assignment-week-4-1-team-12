import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAccountList } from '@api/accountApi';


export const fetchAccountList = createAsyncThunk('account/fetchAccountList', async()=>{
    try{
        const response = await getAccountList();
        return response.data;
    } catch (error) {
        console.log(error)
        return error.response
    }
})

const accountSlice = createSlice({
    name: 'accountList',
    initialState : { entities: [], loading: 'idle' },
    reducers :{ //행동
        setAccountList(state){

        },
        filterAccountList(state, filterKey){

        },
        searchAccountWithQuery(state, query){

        },
        pagenateAccountList(state, page, limit){

        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchAccountList.fulfilled, (state, action) => {
          // Add user to the state array
          state.entities.push(action.payload)
        })
      },
})

export default accountSlice.reducer;