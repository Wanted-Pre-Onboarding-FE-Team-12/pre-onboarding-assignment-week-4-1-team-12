import React, { useState } from 'react';

import { userSlice } from '@store/modules/userSlice';
import { getSearchUser } from '@store/modules/userSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

function UserSearch() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const search = e => {
    e.preventDefault();
    dispatch(getSearchUser(text));
    dispatch(userSlice.actions.select(text));
    setText('');
  };

  return (
    <SearchForm>
      <form onSubmit={search}>
        <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
        <button type="submit">검색</button>
      </form>
    </SearchForm>
  );
}

export default UserSearch;

const SearchForm = styled.div`
  text-align: right;
  input {
    width: 200px;
    height: 30px;
    margin-right: 20px;
  }
  button {
    width: 70px;
    padding: 4px;
  }
  margin-bottom: 30px;
`;
