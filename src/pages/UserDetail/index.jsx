import React from 'react';
import Layout from '@layout/index';
import Detail from './Detail/detail';
import AccountList from '@pages/UserDetail/AccountsList/accountsList';

const UserDetail = () => {
  return (
    <Layout>
      <Detail />
      <AccountList />
    </Layout>
  );
};

export default UserDetail;
