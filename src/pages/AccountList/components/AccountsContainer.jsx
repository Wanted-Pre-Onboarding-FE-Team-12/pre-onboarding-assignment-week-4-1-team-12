import { fetchAccountList, fetchBrockers, fetchUsers } from '@store/modules/accountSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountItem from './AccountItem';

const AccountsContainer = () => {
  const dispatch = useDispatch();
  let [accounts, brockers, users] = useSelector(state => {
    console.log(state.account);
    return [state.account.entities[0], state.account.brockers[0], state.account.users[0]];
  });

  useEffect(() => {
    dispatch(fetchAccountList());
    dispatch(fetchBrockers());
    dispatch(fetchUsers());
  }, []);

  return (
    <table>
        <tbody>
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
            {accounts && brockers && users && 
                accounts.slice(0, 20).map(account => 
                <AccountItem key={account.uuid} account={account} brockers={brockers} users={users}/>)}
        </tbody>
    </table>
  );
};

export default AccountsContainer;
