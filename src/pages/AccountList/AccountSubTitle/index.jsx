import styled from 'styled-components';

const AccountSubTitle = () => {
  return (
    <AccountSubTitleContainer>
      <span>증권사</span>
      <span>계좌번호</span>
      <span>고객명 </span>
      <span>계좌상태</span>
      <span>계좌명</span>
      <span>평가금액</span>
      <span>입금금액</span>
      <span>계좌활성화여부</span>
      <span>계좌개설일</span>
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
  background-color: #a094b7;
  margin-bottom: 2rem;
  font-size: 16px;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  > * {
    text-align: center;
    flex-basis: 110px;
    width: 110px;
  }
`;
