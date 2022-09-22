import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAccounts,
  getAccountStatus,
  getBrokers,
  getBrokerFormat,
  getUsers,
} from '@store/modules/accountSlice';
import AccountSubTitle from './AccountSubTitle/AccountSubTitle';
import ListItem from './ListItem';
import Layout from '@layout/index';
import styled from 'styled-components';

const AccountList = () => {
  const dispatch = useDispatch();
  const [accounts, setAccounts] = useState([]);
  const { userList, accountStatusList } = useSelector(({ account }) => account);

  const userIdHashObj = useMemo(() => {
    if (userList) {
      return userList.reduce((acc, cur) => {
        acc[cur.id] = cur.name;
        return acc;
      }, {});
    }
  }, [userList]);

  const accountStatusHashObj = useMemo(() => {
    if (accountStatusList) {
      const reverseKeyValue = Object.entries(accountStatusList).map(([key, value]) => [value, key]);
      return Object.fromEntries(reverseKeyValue);
    }
    return {};
  }, [accountStatusList]);

  useEffect(() => {
    const getData = async () => {
      try {
        const [response] = await Promise.all([
          dispatch(getAccounts()),
          dispatch(getAccountStatus()),
          dispatch(getBrokers()),
          dispatch(getBrokerFormat()),
          dispatch(getUsers()),
        ]);

        if (response.payload) {
          setAccounts([...response.payload].splice(0, 20));
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
        <AccountSubTitle />
        {accounts?.map((account, idx) => (
          <ListItem
            key={idx}
            account={account}
            userIdHashObj={userIdHashObj}
            accountStatusHashObj={accountStatusHashObj}
          />
        ))}
      </AccountListContainer>
    </Layout>
  );
};

export default AccountList;

const AccountListContainer = styled.div``;
