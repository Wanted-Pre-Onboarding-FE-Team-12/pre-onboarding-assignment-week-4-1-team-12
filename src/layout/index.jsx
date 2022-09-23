import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import Footer from '@components/Footer';

// CSS
import * as S from './style';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';

const Layout = ({ auth, children }) => {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <ThemeProvider theme={theme}>
      {auth ? (
        <S.AuthLayoutWrapper>
          <main>{children}</main>
        </S.AuthLayoutWrapper>
      ) : (
        <S.LayoutWrapper>
          {!isLoggedIn && <Navigate to="/" replace />}
          <Sidebar />
          <div>
            <Header />
            <S.MainContent>
              <main>{children}</main>
            </S.MainContent>
            <Footer />
          </div>
        </S.LayoutWrapper>
      )}

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Layout;
