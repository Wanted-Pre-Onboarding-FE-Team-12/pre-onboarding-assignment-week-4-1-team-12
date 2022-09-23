import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { convertPageTitle } from '@utils/menuItem';

// CSS
import * as S from './style';

const Header = () => {
  const { pathname } = useLocation();
  const { email } = useSelector(state => state.auth);
  const filteredName = email?.split('@')[0];

  return (
    <S.HeaderWrapper>
      <div className="header-title">{convertPageTitle(pathname)}</div>
      <div className="admin-container">
        <span>{filteredName}</span>님.
      </div>
    </S.HeaderWrapper>
  );
};

export default Header;
