import {
  fetchAccountList,
  fetchAccountStatus,
  fetchBrockers,
  fetchUsers,
} from '@store/modules/accountSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountItem from './AccountItem';
import styled from 'styled-components';

const AccountsContainer = () => {
  const dispatch = useDispatch();
  let [accounts, brockers, users, accountStatus] = useSelector(state => {
    console.log(state.account);
    return [
      state.account.entities[0],
      state.account.brockers[0],
      state.account.users[0],
      state.account.accountStatus[0],
    ];
  });

  useEffect(() => {
    dispatch(fetchAccountList());
    dispatch(fetchBrockers());
    dispatch(fetchUsers());
    dispatch(fetchAccountStatus());
  }, []);

  return (
    <AccountTable>
      <TableHeader>
        <tr>
          <th>user-name</th>
          <th>broker-name</th>
          <th>account-number</th>
          <th>account-status</th>
          <th>account-name</th>
          <th>assets</th>
          <th>payments</th>
          <th>active</th>
          <th>created_at</th>
        </tr>
      </TableHeader>
      <tbody>
        {accounts &&
          brockers &&
          users &&
          accountStatus &&
          accounts.map(account => (
            <AccountItem
              key={account.uuid}
              account={account}
              brockers={brockers}
              users={users}
              accountStatus={accountStatus}
            />
          ))}
      </tbody>
    </AccountTable>
  );
};

export default AccountsContainer;

const AccountTable = styled.table`
  width: 100%;
`;

const TableHeader = styled.thead`
  font-size: 1.5rem;
  background-color: white;
`;
