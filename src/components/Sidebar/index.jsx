import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { menuItem } from '@utils/menuItem';

// CSS
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarToggle } from '@store/modules/commonSlice';

const Sidebar = () => {
  const { isSidebarOpen } = useSelector(state => state.common);
  const dispatch = useDispatch();

  const sidebarToggleHandler = () => {
    dispatch(sidebarToggle());
  };
  return (
    <S.SidebarWrapper isOpen={isSidebarOpen}>
      <S.SidebarTop onClick={sidebarToggleHandler}>
        <h1 className="logo">Logo</h1>
        <div className="bars">
          <FaBars />
        </div>
      </S.SidebarTop>
      <>
        {menuItem.map((item, idx) => (
          <NavLink to={item.path} key={idx}>
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
