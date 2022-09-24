import styled from 'styled-components';

export const ItemContainer = styled.li`
  .link,
  .logout-btn {
    display: block;
    margin: 1rem 0;
    padding: 5px 0 5px 20px;
    color: #333;
    font-size: 17px;
    font-weight: 600;
    border-radius: 0 14px 14px 0;
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: #f2f3f4;
    }
  }

  .link {
    &.active {
      background: #b5a8a2;
    }
  }

  .icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 25px;
    line-height: 45px;
  }

  .item-name {
    display: inline-block;
    position: absolute;
    line-height: 40px;
    transition: opacity 0.2s ease-in;

    &.inactive {
      width: 0;
      height: 0;
      opacity: 0;
      overflow: hidden;
      transition: opacity 0.2s ease-in;
    }
  }
`;
