import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;

  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  min-height: 11rem;
  background: ${props => props.theme.colors.primary8};
  padding: 1.6rem 2rem 2rem 7rem;
  font-size: 1.7rem;

  .header-title {
    background: #d7ccc8;
    padding: 0.6rem 1.5rem;
    border-radius: 10px;
  }

  .admin-container {
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 0.6rem 1rem;
    border-radius: 6px;
    transition: 0.2s;
  }

  .admin-name {
    &:hover {
      cursor: pointer;
      color: var(--neonBlue);
    }
  }

  .admin-menu {
    position: absolute;
    padding: 0.5rem 1rem;
    top: 25px;
    min-height: 8rem;
    border: 1px solid #ccc;
    transition: all 0.2s;

    li {
      display: flex;
      margin-top: 4rem;
      font-size: 1.7rem;
      line-height: 20px;
      cursor: pointer;

      svg {
        line-height: 20px;
        margin-right: 3rem;
      }

      &:hover {
        color: var(--neonBlue);
      }
    }
  }
`;
