import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  background: ${props => props.theme.colors.primary2};
  color: #fff;
  height: 100%;
  width: ${props => (props.isOpen ? '27rem' : '5rem')};
  transition: all 0.5s;

  .link {
    color: #fff;
    padding: 10px 15px;
    gap: 15px;
    transition: all 0.5s;
  }
  .link:hover {
    background: lightskyblue;
    color: #000;
    transition: all 0.5s;
  }
  .active {
    background: lightskyblue;
    color: #000;
  }
  .icon,
  .link_text {
    font-size: 20px;
    transition: all 0.25s;
  }
  .link_text {
    opacity: ${props => (props.isOpen ? 1 : 0)};
    height: ${props => (props.isOpen ? '70px' : '0')};
  }
`;

export const SidebarTop = styled.div`
  min-height: 10rem;

  .logo {
    font-size: 30px;
  }
`;
