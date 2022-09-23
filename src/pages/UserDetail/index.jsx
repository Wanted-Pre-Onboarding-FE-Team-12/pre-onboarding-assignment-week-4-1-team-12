import React from 'react';
import Layout from '@layout/index';
import Detail from './Detail/detail';
import AccountList from '@pages/UserDetail/AccountsList/accountsList';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const params = useParams();
  const { userId } = params;

  return (
    <Layout>
      <Detail userId={userId} />
      <AccountList userId={userId} />
    </Layout>
  );
};

export default UserDetail;
