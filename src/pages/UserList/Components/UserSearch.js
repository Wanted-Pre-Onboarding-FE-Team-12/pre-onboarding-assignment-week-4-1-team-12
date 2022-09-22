import React, { useState } from 'react';

import { userSlice } from '@store/modules/userSlice';
import { getSearchUser } from '@store/modules/userSlice';
import { useDispatch } from 'react-redux';

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
    <div>
      <form onSubmit={search}>
        <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
        <button type="submit">검색</button>
      </form>
    </div>
  );
}

export default UserSearch;
