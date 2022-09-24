import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  display: grid;
  grid-template-rows: 10rem 1fr;
  padding: 3rem 0 2rem;
  width: ${props => (props.isOpen ? '30rem' : '8rem')};
  height: 100%;
  background: #efebe9;
  color: #fff;
  transition: width 0.2s ease-in;

  .underline {
    width: 100%;
    height: 1px;
    margin: 2rem 0;
    border-radius: 1px;
    background: #999;
  }
`;

export const SidebarTop = styled.div`
  position: relative;
  margin: 1rem 0;
  padding: 0 1.5rem;

  .logo {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: #777;
    line-height: 50px;
    overflow: hidden;
    svg {
      width: 100%;
      height: 100%;
    }
  }

  .bars {
    position: absolute;
    top: 50%;
    right: ${props => (props.isOpen ? '1.5rem' : '-40px')};
    color: #333;
    font-size: 2.6rem;
    cursor: pointer;
    transform: translateY(-50%);
    transition: all 0.2s;
    &:hover {
      color: var(--neonBlue);
    }
  }
`;

export const SidebarMenu = styled.div`
  padding-right: 10px;
`;
