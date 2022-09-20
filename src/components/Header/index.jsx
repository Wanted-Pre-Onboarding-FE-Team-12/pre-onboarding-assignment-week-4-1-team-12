import React from 'react';

// CSS
import * as S from './style';

const Header = () => {
  return (
    <S.HeaderWrapper>
      {/* 페이지 이동시에 맞춰 변경해주시면 될 것 같습니다. */}
      <div className="header-title">Page Title</div>
      <div className="admin-container">
        <span>관리자</span>님
      </div>
    </S.HeaderWrapper>
  );
};

export default Header;
