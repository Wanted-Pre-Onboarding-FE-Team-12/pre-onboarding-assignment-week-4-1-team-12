import React from 'react';
import { useSelector } from 'react-redux';

// CSS
import * as S from './style';

const Header = () => {
  const { email } = useSelector(state => state.auth);
  const filteredName = email?.split('@')[0];

  return (
    <S.HeaderWrapper>
      {/* 페이지 이동시에 맞춰 변경해주시면 될 것 같습니다. */}
      <div className="header-title">Page Title</div>
      <div className="admin-container">
        <span>{filteredName}</span>님.
      </div>
    </S.HeaderWrapper>
  );
};

export default Header;
