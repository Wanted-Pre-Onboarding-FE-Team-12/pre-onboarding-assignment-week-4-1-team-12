import React from 'react';
import Layout from '@layout/index';
import AllUserList from './Components/AllUserList';
import ActiveUserList from './Components/ActiveUserList';
import StaffUserList from './Components/StaffUserList';
import SearchUserList from './Components/SearchUserList';
import UserSearch from './Components/UserSearch';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '@store/modules/userSlice';

// import React, { useState } from 'react';
// import { getSearchUser } from '@store/modules/userSlice';

// const UserSearch = () => {
//   const dispatch = useDispatch();
//   const [text, setText] = useState('');
//   const searchResult = useSelector(state => state.userList.searchUser);
//   const select = useSelector(state => state.userList.text);

//   const search = e => {
//     e.preventDefault();
//     dispatch(getSearchUser(text));
//     dispatch(userSlice.actions.select(text));
//     setText('');
//     console.log('a :', searchResult);
//     console.log('select :', select);
//   };

//   return (
//     <div>
//       <form onSubmit={search}>
//         <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
//         <button type="submit">검색</button>
//       </form>
//     </div>
//   );
// };

function UserList() {
  const dispatch = useDispatch();
  const select = useSelector(state => state.userList.text);

  return (
    <Layout>
      <UserSearch />
      <div>
        <button
          onClick={() => {
            dispatch(userSlice.actions.select('all'));
          }}
        >
          모든 유저
        </button>
        <button
          onClick={() => {
            dispatch(userSlice.actions.select('staff'));
          }}
        >
          임원
        </button>
        <button
          onClick={() => {
            dispatch(userSlice.actions.select('active'));
          }}
        >
          활성화 유저
        </button>
      </div>
      {select === 'staff' ? (
        <StaffUserList />
      ) : select === 'active' ? (
        <ActiveUserList />
      ) : select === 'all' || select === '' ? (
        <AllUserList />
      ) : (
        <SearchUserList />
      )}
    </Layout>
  );
}

export default UserList;
