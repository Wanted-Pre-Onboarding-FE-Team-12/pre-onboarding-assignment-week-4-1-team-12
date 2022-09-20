import React from 'react';

import Layout from '@layout/index';
import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <Layout auth>
      <LoginForm />
    </Layout>
  );
};

export default Login;
