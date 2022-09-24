import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sidebarToggle } from '@store/modules/commonSlice';
import MenuItem from '@components/MenuItem';
import { menuItem } from '@utils/menuItem';

// CSS
import * as S from './style';
import { IoLogoBitcoin } from 'react-icons/io';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

const Sidebar = () => {
  const { isSidebarOpen } = useSelector(state => state.common);
  const dispatch = useDispatch();

  const sidebarToggleHandler = () => {
    dispatch(sidebarToggle());
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
            key={idx}
            idx={idx}
            path={item.path}
            icon={item.icon}
            name={item.name}
            isSidebarOpen={isSidebarOpen}
          />
        ))}
      </S.SidebarMenu>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
