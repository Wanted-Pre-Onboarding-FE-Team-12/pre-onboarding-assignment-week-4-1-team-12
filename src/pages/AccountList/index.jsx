import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getAccounts,
  getAccountStatus,
  getBrokers,
  getBrokerFormat,
  getUsers,
} from '@store/modules/accountSlice';
import ListItem from './ListItem';
import Layout from '@layout/index';
import styled from 'styled-components';

const AccountList = () => {
  const dispatch = useDispatch();
  // account list state
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { payload } = await dispatch(getAccounts());
        await dispatch(getAccountStatus());
        await dispatch(getBrokers());
        await dispatch(getBrokerFormat());
        await dispatch(getUsers());
        if (payload) {
          setAccounts([...payload].splice(0, 20));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Layout>
      <AccountListContainer>
        {accounts?.map((account, idx) => (
          <ListItem key={idx} account={account} />
        ))}
      </AccountListContainer>
    </Layout>
  );
};

export default AccountList;

const AccountListContainer = styled.div``;
