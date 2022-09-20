import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.primary8};
  min-height: 10rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1.6rem 3rem;
  font-size: 1.7rem;

  .admin-container {
    padding: 1rem 1.4rem;
    border-radius: 6px;
    background: ${props => props.theme.colors.primary5};
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.57);
    transition: 0.2s linear;
    &:hover {
      cursor: pointer;
      transform: translateY(-3px);
    }
  }
`;
