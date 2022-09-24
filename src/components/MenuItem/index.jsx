import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './style';
const MenuItem = ({ path, idx, icon, name, isSidebarOpen, styleClass }) => {
  return (
    <S.ItemContainer>
      <NavLink
        to={path}
        key={idx}
        className={({ isActive }) => (isActive ? `${styleClass} active` : `${styleClass}`)}
      >
        <div className="icon">{icon}</div>
        <span className={`item-name ${isSidebarOpen ? '' : 'inactive'}`}>{name}</span>
      </NavLink>
    </S.ItemContainer>
  );
};

export default MenuItem;
