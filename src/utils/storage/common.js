import {
  setValueToLocalStorage,
  getValueFromLocalStorage,
  deleteValueFromLocalStorage,
} from './localStorage';

export const setSideBarStatus = value => {
  setValueToLocalStorage('sidebar-collapsed', value);
};

export const getSideBarStatus = () => {
  const sidebarStatus = getValueFromLocalStorage('sidebar-collapsed');
  return sidebarStatus;
};

export const removeSideBarStatus = () => {
  deleteValueFromLocalStorage('sidebar-collapsed');
};
