import React from 'react';
import styled from 'styled-components';

const AccountItem = ({ account, brockers, users, accountStatus }) => {
  const { user_id, broker_id, status, number, name, assets, payments, is_active, created_at } =
    account;

  function applyCommas(number) {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  function accountNumberMasking(number) {
    return number.replace(/(?<=\d{2})\d(?=\d{2})/g, '*');
  }
  function remainDate(dateAndTime) {
    const date = dateAndTime.split('T')[0];
    return date;
  }
  function setUserName(target_id) {
    const result = users.find(user => {
      return user.id === target_id;
    });
    return result.name;
  }
  function setAccountStatus(status) {
    const result = Object.entries(accountStatus).find(st => st[1] === status);
    return result[0];
  }
  return (
    <AccountRow>
      <td>{setUserName(user_id)}</td>
      <td>{brockers[broker_id]}</td>
      <td>{accountNumberMasking(number)}</td>
      <td>{setAccountStatus(status)}</td>
      <td>{name}</td>
      <td>{applyCommas(assets)}</td>
      <td>{applyCommas(payments)}</td>
      <td>{is_active ? '✅' : '⛔'}</td>
      <td>{remainDate(created_at)}</td>
    </AccountRow>
  );
};

export default AccountItem;

const AccountRow = styled.tr`
  font-size: 1.5rem;

  td {
    padding: 2rem 0;
    text-align: center;
    border-bottom: 1px solid grey;
  }

  td:nth-child(1):hover {
    cursor: pointer;
    font-weight: 700;
  }
`;
