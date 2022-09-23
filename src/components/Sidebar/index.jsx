import React from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';

import { menuItem } from '@utils/menuItem';

// CSS
import * as S from './style';
import { IoLogoBitcoin } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarToggle } from '@store/modules/commonSlice';
import MenuItem from '@components/MenuItem';
import { Logout } from '@store/modules/authSlice';

const Sidebar = () => {
  const { isSidebarOpen } = useSelector(state => state.common);
  const dispatch = useDispatch();

  const sidebarToggleHandler = () => {
    dispatch(sidebarToggle());
  };

  const logoutHandler = () => {
    dispatch(Logout());
  };

  return (
    <S.SidebarWrapper isOpen={isSidebarOpen}>
      <S.SidebarTop isOpen={isSidebarOpen}>
        <div className="logo">
          <IoLogoBitcoin />
        </div>
        <div className="bars" onClick={sidebarToggleHandler}>
          {isSidebarOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </div>
        <div className="underline" />
      </S.SidebarTop>
      <S.SidebarMenu>
        {menuItem.map((item, idx) => (
          <MenuItem
            path={item.path}
            idx={idx}
            icon={item.icon}
            name={item.name}
            isSidebarOpen={isSidebarOpen}
            styleClass="link"
          />
        ))}
      </S.SidebarMenu>
      <S.SidebarBottom onClick={logoutHandler}>
        <MenuItem
          icon={<BiLogOut />}
          name="로그아웃"
          isSidebarOpen={isSidebarOpen}
          styleClass="logout-btn"
        />
      </S.SidebarBottom>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
