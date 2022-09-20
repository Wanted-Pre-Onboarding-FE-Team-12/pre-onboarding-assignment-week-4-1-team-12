import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import loadable from '@loadable/component';
import { loadUser } from '@store/modules/authSlice';

const Login = loadable(() => import('@pages/Login'));
const AccountList = loadable(() => import('@pages/AccountList'));
const AccountDetail = loadable(() => import('@pages/AccountDetail'));
const UserList = loadable(() => import('@pages/UserList'));
const UserDetail = loadable(() => import('@pages/UserDetail'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/accounts" element={<AccountList />} />
        <Route path="/accounts/:accountId" element={<AccountDetail />} />
      </Routes>
    </>
  );
}

export default App;
