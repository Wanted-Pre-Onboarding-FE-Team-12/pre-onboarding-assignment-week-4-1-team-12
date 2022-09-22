import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAccount, getUserSetting, deleteUser } from '@store/modules/userSlice';

function SearchUserList() {
  const dispatch = useDispatch();
  const searchResult = useSelector(state => state.userList.searchUser);
  const userAccount = useSelector(state => state.userList.account);
  const userSetting = useSelector(state => state.userList.userSetting);

  useEffect(() => {
    if (searchResult.length > 0) {
      const userIdArray = searchResult.map(user => user.id);
      dispatch(getAccount(userIdArray));
      const userUuidArray = searchResult.map(user => user.uuid);
      dispatch(getUserSetting(userUuidArray));
    }
  }, [dispatch, searchResult, searchResult.users]);

  const onDeleteUser = id => {
    const deleteConfirm = window.confirm('삭제하시겠습니까?');

    if (deleteConfirm) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>계좌 갯수</th>
            <th>이메일 주소</th>
            <th>성별코드</th>
            <th>생년월일</th>
            <th>휴대폰 번호</th>
            <th>최근 로그인</th>
            <th>임직원 여부</th>
            <th>혜택 수신 동의 여부</th>
            <th>활성화 상태</th>
            <th>가입일</th>
          </tr>
        </thead>
        <tbody>
          {searchResult?.map(user => {
            const findSetting = userSetting.find(item => item.uuid === user.uuid);
            return (
              <tr key={user.id}>
                <td>{maskingName(user.name)}</td>
                <td>
                  {userAccount ? userAccount.filter(item => item.user_id === user.id).length : 0}
                </td>
                <td>{user.email}</td>
                <td>{user.gender_origin}</td>
                <td>{dateFormat(user.birth_date)}</td>
                <td>{maskingPhoneNumber(user.phone_number)}</td>
                <td>{dateFormat(user.last_login)}</td>
                <td>{getBooleanString(findSetting?.is_staff)}</td>
                <td>{getBooleanString(findSetting?.allow_marketing_push)}</td>
                <td>{getBooleanString(findSetting?.is_active)}</td>
                <td>{dateFormat(user.created_at)}</td>
                <button
                  onClick={() => {
                    onDeleteUser(user.id);
                  }}
                >
                  삭제
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SearchUserList;

const getBooleanString = b => {
  return b ? 'YES' : 'NO';
};

const dateFormat = str => {
  return str.slice(0, 10);
};

const maskingPhoneNumber = str => {
  return str.toString().replace(/-[0-9]{4}-/g, '-****-');
};

const maskingName = str => {
  if (str.length > 2) {
    const originName = str.split('');
    originName.forEach((splitName, i) => {
      if (i === 0 || i === originName.length - 1) return;
      originName[i] = '*';
    });
    const joinName = originName.join();
    return joinName.replace(/,/g, '');
  } else return str.replace(/.$/, '*');
};
