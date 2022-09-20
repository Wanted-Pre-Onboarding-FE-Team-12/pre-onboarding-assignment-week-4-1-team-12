import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20rem;
  background: ${props => props.theme.colors.primary7};
  text-align: center;

  p {
    color: ${props => props.theme.colors.primary1};
    font-size: 1.5rem;
  }
`;
