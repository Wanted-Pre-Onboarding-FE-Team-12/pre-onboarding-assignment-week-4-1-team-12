import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import { useDispatch } from 'react-redux';
import { loadUser } from '@store/modules/authSlice';

const Login = loadable(() => import('@pages/Login'));
const AccountList = loadable(() => import('@pages/AccountList'));
const AccountDetail = loadable(() => import('@pages/AccountDetail'));
const UserDetail = loadable(() => import('@pages/UserDetail'));
const UserList = loadable(() => import('@pages/UserList'));
const UserForm = loadable(() => import('@pages/UserList/Components/UserForm'));
const AllUserList = loadable(() => import('@pages/UserList/Components/AllUserList'));
const StaffUserList = loadable(() => import('@pages/UserList/Components/StaffUserList'));
const ActiveUserList = loadable(() => import('@pages/UserList/Components/ActiveUserList'));
const SearchUserList = loadable(() => import('@pages/UserList/Components/SearchUserList'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/all" element={<AllUserList />} />
        <Route path="/users/staff" element={<StaffUserList />} />
        <Route path="/users/active" element={<ActiveUserList />} />
        <Route path="/users/?q" element={<SearchUserList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/users/post" element={<UserForm />} />
        <Route path="/accounts" element={<AccountList />} />
        <Route path="/accounts/:accountId" element={<AccountDetail />} />
      </Routes>
    </>
  );
}

export default App;
