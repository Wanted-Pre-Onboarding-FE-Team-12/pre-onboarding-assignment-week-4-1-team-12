import styled from 'styled-components';

export const Button = ({ onClick, disabled, type, children }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  min-height: 4.3rem;
  font-size: 1.6rem;
  color: #4d5159;
  background-color: hsl(210, 31%, 80%);
  border-radius: 4px;
  border: 1px solid #d1d3d8;
  cursor: pointer;
  transition: all 80ms linear;
  &:hover {
    box-shadow: 0 0 0 1px #80c0da;
  }
  &:disabled,
  :disabled:hover,
  :disabled:active {
    background-color: #f7f8fa;
    color: #c2c8cc;
    border-color: #dadce0;
    cursor: default;
  }
`;
