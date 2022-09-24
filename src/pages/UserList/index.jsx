import React from 'react';
import Layout from '@layout/index';
import AllUserList from './Components/AllUserList';
import ActiveUserList from './Components/ActiveUserList';
import StaffUserList from './Components/StaffUserList';
import SearchUserList from './Components/SearchUserList';
import UserSearch from './Components/UserSearch';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '@store/modules/userSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function UserList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const select = useSelector(state => state.userList.text);

  return (
    <Layout>
      <UserSearch />
      <FilterDiv>
        <button
          onClick={() => {
            dispatch(userSlice.actions.select('all'));
          }}
        >
          모든 사용자
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
          활성화
        </button>
        <button
          onClick={() => {
            navigate('/users/create', {
              state: {
                prevPage: 1,
              },
            });
          }}
        >
          사용자 추가
        </button>
      </FilterDiv>
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

const FilterDiv = styled.div`
  text-align: right;
  margin-bottom: 10px;
  button {
    margin: 10px;
    padding: 4px;
  }
`;
