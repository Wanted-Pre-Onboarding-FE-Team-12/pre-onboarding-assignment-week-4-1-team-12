import styled from 'styled-components';

const AccountSubTitle = () => {
  return (
    <AccountSubTitleContainer>
      <p>증권사</p>
      <p>계좌번호</p>
      <p>고객명 </p>
      <p>계좌상태</p>
      <p>계좌명</p>
      <p>평가금액</p>
      <p>입금금액</p>
      <p>계좌활성화여부</p>
      <p>계좌개설일</p>
    </AccountSubTitleContainer>
  );
};

export default AccountSubTitle;

const AccountSubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #d7ccc8;
  margin-bottom: 1rem;
  font-size: 16px;
  font-weight: bold;
  > * {
    text-align: center;
    flex-basis: 110px;
    width: 110px;
  }
`;
