import styled from 'styled-components';

const ListItem = ({ account }) => {
  const { broker_id, status, number, name, assets, is_active, created_at } = account;

  // console.log(id, user_id, Payments, );

  return (
    <AccountListContainer>
      <payments>고객명: {account.user_name ?? '이름 주세요'} </payments>
      <p>브로커명: {broker_id}</p>
      <p>계좌번호: {number}</p>
      <p>계좌상태: {status}</p>
      <p>계좌명: {name}</p>
      <p>평가금액: {assets}</p>
      {/* <p>입금금액: {Payments}</p> */}
      <p>계좌활성화여부: {is_active ? 'O' : 'X'}</p>
      <p>계좌개설일: {created_at}</p>
    </AccountListContainer>
  );
};

export default ListItem;

const AccountListContainer = styled.div`
  width: 500px;
  background-color: pink;
  margin-bottom: 3rem;
`;
