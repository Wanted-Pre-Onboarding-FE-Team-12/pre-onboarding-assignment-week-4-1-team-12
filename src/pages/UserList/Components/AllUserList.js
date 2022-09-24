import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getAccount, getUserSetting, deleteUser } from '@store/modules/userSlice';
import { updateUser } from '@api/userApi';
import { userSlice } from '@store/modules/userSlice';
import Pagination from '@pages/UserList/Components/Pagination';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const AllUserList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userList, userAccount, userSetting, updateList } = useSelector(state => ({
    userList: state.userList.users,
    userAccount: state.userList.account,
    userSetting: state.userList.userSetting,
    updateList: state.userList.updated,
  }));

  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const total = userList.length;

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, updateList]);

  useEffect(() => {
    if (userList.length > 0) {
      const userIdArray = userList.map(user => user.id);
      dispatch(getAccount(userIdArray));
      const userUuidArray = userList.map(user => user.uuid);
      dispatch(getUserSetting(userUuidArray));
    }
  }, [dispatch, userList, userList.users]);

  const onDeleteUser = id => {
    const deleteConfirm = window.confirm('삭제하시겠습니까?');

    if (deleteConfirm) {
      dispatch(deleteUser(id));
      dispatch(userSlice.actions.updateData());
    }
  };

  const onUpdateUser = (user, setting) => {
    const newName = window.prompt('변경할 이름 :');
    const getUpdateParams = {
      id: user.id,
      email: user.email || 'newface@dco.com',
      password: user.password || 'super-strong-password',
      uuid: user.uuid,
      photo: user.photo,
      name: newName,
      age: user.age,
      gender_origin: user.gender_origin,
      birth_date: user.birth_date,
      phone_number: user.phone_number,
      address: user.address,
      detail_address: user.detail_address,
      created_at: user.created_at,
      allow_marketing_push: setting?.allow_marketing_push,
      is_active: setting?.is_active,
      is_staff: setting?.is_staff,
    };
    updateUser(user.id, getUpdateParams);
    dispatch(userSlice.actions.updateData());
  };

  return (
    <>
      <HeaderContainer>
        <p>이름</p>
        <p>계좌 갯수</p>
        <p>이메일 주소</p>
        <p>성별코드</p>
        <p>생년월일</p>
        <p>휴대폰 번호</p>
        <p>최근 로그인</p>
        <p>임직원</p>
        <p>혜택수신동의</p>
        <p>활성화</p>
        <p>가입일</p>
        <p></p>
        <p></p>
      </HeaderContainer>
      {userList?.slice(offset, offset + limit).map(user => {
        const findSetting = userSetting.find(item => item.uuid === user.uuid);
        return (
          <BodyContainer key={user.id}>
            <p onClick={() => navigate(`/users/${user.id}`)}>{maskingName(user.name)}</p>
            <p>{userAccount ? userAccount.filter(item => item.user_id === user.id).length : 0}</p>
            <p>{user.email}</p>
            <p>{user.gender_origin}</p>
            <p>{dateFormat(user.birth_date)}</p>
            <p>{maskingPhoneNumber(user.phone_number)}</p>
            <p>{dateFormat(user.last_login)}</p>
            <p>{getBooleanString(findSetting?.is_staff)}</p>
            <p>{getBooleanString(findSetting?.allow_marketing_push)}</p>
            <p>{getBooleanString(findSetting?.is_active)}</p>
            <p>{dateFormat(user.created_at)}</p>
            <p>
              <Button
                onClick={() => {
                  onUpdateUser(user, findSetting);
                }}
              >
                수정
              </Button>
            </p>
            <p>
              <Button
                onClick={() => {
                  onDeleteUser(user.id);
                }}
              >
                삭제
              </Button>
            </p>
          </BodyContainer>
        );
      })}
      <Pagination total={total} limit={limit} page={page} setPage={setPage} />
    </>
  );
};

export default AllUserList;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  p {
    font-size: 15px;
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
  border-bottom: 1px solid black;
`;

const Button = styled.button`
  padding: 10px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: left;
  width: 100%;
  padding: 1.5rem 0.5rem;
  p {
    font-size: 15px;
    width: 100px;
    text-align: center;
    margin: 1rem;
  }
`;

const getBooleanString = b => {
  return b ? 'YES' : 'NO';
};

const dateFormat = str => {
  if (typeof str !== 'string') {
    return '-';
  }
  return str.slice(0, 10);
};

const maskingPhoneNumber = str => {
  if (typeof str !== 'string') {
    return '-';
  }
  return str.toString().replace(/-[0-9]{4}-/g, '-****-');
};

const maskingName = str => {
  if (typeof str !== 'string') {
    return '-';
  }
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
