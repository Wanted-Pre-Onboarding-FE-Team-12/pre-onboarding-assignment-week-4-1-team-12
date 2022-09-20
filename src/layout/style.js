import styled from 'styled-components';

// 로그인 화면 레이아웃
export const AuthLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  min-height: calc(100vh - 10rem - 250px);
  margin: 10rem auto 0;
`;

// 기타 다른 화면 레이아웃
export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const MainContent = styled.div`
  min-height: calc(100vh - 30rem);
  margin: 4rem 0 0;
  padding: 0 ${({ theme }) => theme.sideSpace.large};
`;
