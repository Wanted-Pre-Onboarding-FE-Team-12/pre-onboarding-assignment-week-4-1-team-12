import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { makeThousandSeparator, makeAccountNumberMasking } from '@utils/account';
import styled from 'styled-components';

const ListItem = ({ account, userIdHashObj, accountStatusHashObj }) => {
  const { broker_id, id, user_id, status, number, name, assets, payments, is_active, created_at } =
    account;
  const navigate = useNavigate();
  const { brokerList } = useSelector(({ account }) => account);

  return (
    <AccountListContainer>
      <p>{brokerList[broker_id] ?? '-'}</p>
      <p onClick={() => navigate(`/accounts/${id}`)}>{makeAccountNumberMasking(number) ?? '-'}</p>
      <p onClick={() => navigate(`/users/${user_id}`)}>{userIdHashObj[user_id] ?? '-'} </p>
      <p>{accountStatusHashObj[status] ?? '-'}</p>
      <p>{name}</p>
      <p>{makeThousandSeparator(assets)}</p>
      <p>{makeThousandSeparator(payments)}</p>
      <p>{is_active ? 'O' : 'X'}</p>
      <p>{created_at.split('T')[0]}</p>
    </AccountListContainer>
  );
};

export default ListItem;

const AccountListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1.5rem 2rem;
  background-color: #efebe9;
  margin-bottom: 1.4rem;
  > * {
    flex-basis: 100px;
    width: 100px;
    text-align: center;
    font-size: 14px;
  }
`;
