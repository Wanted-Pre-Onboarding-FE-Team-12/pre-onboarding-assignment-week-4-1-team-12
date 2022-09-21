import { useSelector } from 'react-redux';
import { makeThousandSeparator } from '@utils/string';
import styled from 'styled-components';

const ListItem = ({ account, userIdHashObj, accountStatusHashObj }) => {
  const { broker_id, user_id, status, number, name, assets, payments, is_active, created_at } =
    account;

  const { brokerList } = useSelector(({ account }) => account);

  return (
    <AccountListContainer>
      <p>고객명: {userIdHashObj[user_id] ?? '-'} </p>
      <p>브로커명: {brokerList[broker_id] ?? '-'}</p>
      <p>계좌번호: {number}</p>
      <p>계좌상태: {accountStatusHashObj[status] ?? '-'}</p>
      <p>계좌명: {name}</p>
      <p>평가금액: {makeThousandSeparator(assets)}</p>
      <p>입금금액: {makeThousandSeparator(payments)}</p>
      <p>계좌활성화여부: {is_active ? 'O' : 'X'}</p>
      <p>계좌개설일: {created_at.split('T')[0]}</p>
    </AccountListContainer>
  );
};

export default ListItem;

const AccountListContainer = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background-color: #efebe9;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  > * {
    padding-right: 1rem;
    font-size: 14px;
  }
`;
