import Button from './Button';
import styled from 'styled-components';

const PageButton = ({ totalPage, page, handleChangeCurrentPage }) => {
  return (
    <PageContainer>
      {Array(totalPage)
        .fill(0)
        .map((_, idx) => (
          <Button
            key={idx}
            page={page}
            pageLabel={idx + 1}
            handleChangeCurrentPage={handleChangeCurrentPage}
          />
        ))}
    </PageContainer>
  );
};

export default PageButton;

const PageContainer = styled.div`
  width: 100%;
  background-color: pink;
`;
