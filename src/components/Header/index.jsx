import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { convertPageTitle } from '@utils/menuItem';
import { Logout } from '@store/modules/authSlice';

// CSS
import * as S from './style';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { email } = useSelector(state => state.auth);
  const filteredName = email?.split('@')[0];

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logouthandler = () => {
    dispatch(Logout());
  };

  return (
    <S.HeaderWrapper>
      <div className="header-title">{convertPageTitle(pathname)}</div>
      <div className="admin-container" onClick={toggleMenuHandler}>
        <div className="admin-name">
          <span>{filteredName}</span> <RiArrowDropDownLine />
        </div>

        {isMenuOpen && (
          <ul className="admin-menu" onClick={logouthandler}>
            <li>
              <div className="admin-menu-icon">
                <FiLogOut />
              </div>
              로그아웃
            </li>
          </ul>
        )}
      </div>
    </S.HeaderWrapper>
  );
};

export default Header;
