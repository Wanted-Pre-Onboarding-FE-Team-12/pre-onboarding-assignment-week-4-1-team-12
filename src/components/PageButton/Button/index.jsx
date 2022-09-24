import styled from 'styled-components';

const Button = ({ page, pageLabel, handleChangeCurrentPage }) => {
  return (
    <PageButton
      onClick={() => handleChangeCurrentPage(pageLabel)}
      style={{ backgroundColor: page === pageLabel ? '#9499b7' : '#e8eaf6' }}
    >
      {pageLabel}
    </PageButton>
  );
};

export default Button;

const PageButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover {
    cursor: pointer;
  }
`;
