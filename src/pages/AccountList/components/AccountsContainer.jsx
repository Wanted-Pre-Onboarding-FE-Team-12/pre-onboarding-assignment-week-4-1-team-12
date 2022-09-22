import { fetchAccountList } from '@store/modules/accountSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountItem from './AccountItem';

const AccountsContainer = () => {
  const dispatch = useDispatch();
  let accounts = useSelector(state => {
    return state.account.entities[0];
  });

  useEffect(() => {
    dispatch(fetchAccountList());
  });
  return (
    <table>
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
      {accounts && accounts.slice(0, 20).map(account => <AccountItem account={account} />)}
    </table>
  );
};

export default AccountsContainer;
