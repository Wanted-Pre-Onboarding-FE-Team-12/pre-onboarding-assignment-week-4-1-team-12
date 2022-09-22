import { fetchAccountList, fetchBrockers } from '@store/modules/accountSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountItem from './AccountItem';

const AccountsContainer = () => {
  const dispatch = useDispatch();
  let [accounts, brockers] = useSelector(state => {
    console.log(state.account)
    return [state.account.entities[0], state.account.brockers[0]]
  });

  useEffect(() => {
    dispatch(fetchAccountList());
    dispatch(fetchBrockers());
  },[]);
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
      {accounts && accounts.slice(0, 20).map(account => <AccountItem account={account} brockers={brockers}/>)}
    </table>
  );
};

export default AccountsContainer;
