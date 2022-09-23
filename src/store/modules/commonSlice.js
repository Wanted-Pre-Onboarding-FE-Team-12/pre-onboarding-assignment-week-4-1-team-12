import { createSlice } from '@reduxjs/toolkit';
import { getSideBarStatus, removeSideBarStatus, setSideBarStatus } from '@utils/storage/common';

const initialState = {
  isSidebarOpen: getSideBarStatus(),
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    sidebarToggle(state) {
      const isOpen = getSideBarStatus();
      if (isOpen) {
        state.isSidebarOpen = false;
        removeSideBarStatus();
        return;
      }
      state.isSidebarOpen = true;
      setSideBarStatus(true);
    },

    sidebarClose(state) {
      const isOpen = getSideBarStatus();
      if (isOpen) {
        state.isSidebarOpen = false;
        removeSideBarStatus();
      }
    },
  },
});

export const { sidebarToggle, sidebarClose } = commonSlice.actions;
export default commonSlice.reducer;
