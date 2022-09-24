import React, { useCallback } from 'react';
import styled from 'styled-components';
import Layout from '@layout/index';
import useTypedInput from '@hooks/useTypedInput';
import InputWithLabel from '@components/InputWIthLabel';
import { useDispatch } from 'react-redux';
import { userSlice } from '@store/modules/userSlice';
import { createUser } from '@api/userApi';
import { useNavigate } from 'react-router-dom';

function UserForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useTypedInput('');
  const password = useTypedInput('');
  const photo = useTypedInput(0);
  const email = useTypedInput('');
  const age = useTypedInput(1);
  const address = useTypedInput('');
  const detail = useTypedInput('');
  const gender = useTypedInput(0);
  const birth = useTypedInput('');
  const phoneNumber = useTypedInput('');
  const allowMarketing = useTypedInput(false);
  const allowInvest = useTypedInput(false);
  const isActive = useTypedInput(false);
  const isStaff = useTypedInput(false);

  const inputs = [
    { ...name, id: 'name', label: '이름', type: 'text' },
    { ...password, id: 'password', label: '비밀번호', type: 'password' },
    { ...photo, id: 'photo', label: '사진', type: 'text' },
    { ...email, id: 'email', label: '이메일', type: 'text' },
    { ...age, id: 'age', label: '나이', type: 'text' },
    { ...address, id: 'address', label: '주소', type: 'text' },
    { ...detail, id: 'detail', label: '상세주소', type: 'text' },
    { ...gender, id: 'gender', label: '성별코드', type: 'text' },
    { ...birth, id: 'birth', label: '생일', type: 'text' },
    { ...phoneNumber, id: 'phoneNumber', label: '전화번호', type: 'text' },
    { ...allowMarketing, id: 'allowMarketing', label: '마케팅 수신여부', type: 'checkbox' },
    { ...allowInvest, id: 'allowInvest', label: '투자', type: 'checkbox' },
    { ...isActive, id: 'isActive', label: '활성화 여부', type: 'checkbox' },
    { ...isStaff, id: 'isStaff', label: '임직원 여부', type: 'checkbox' },
  ];

  const getUsersPostParams = useCallback(() => {
    return {
      name: name.value,
      password: password.value,
      photo: `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${photo.value}.jpg`,
      email: email.value,
      age: age.value,
      address: address.value,
      detail_address: detail.value,
      gender_origin: gender.value,
      birth_date: birth.value,
      phone_number: phoneNumber.value,
    };
  }, [
    address.value,
    password.value,
    age.value,
    birth.value,
    detail.value,
    email.value,
    gender.value,
    name.value,
    phoneNumber.value,
    photo.value,
  ]);

  const getSettingParams = useCallback(() => {
    return {
      allow_marketing_push: allowMarketing.value || false,
      allow_invest_push: allowInvest.value || false,
      is_active: isActive.value || false,
      is_staff: isStaff.value || false,
    };
  }, [allowInvest.value, allowMarketing.value, isActive.value, isStaff.value]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      createUser(getUsersPostParams(), getSettingParams());
      dispatch(userSlice.actions.updateData());
      navigate('/users');
    },
    [getUsersPostParams, getSettingParams],
  );

  return (
    <Layout>
      <FormStyle onSubmit={handleSubmit}>
        {inputs.map(item => (
          <InputWithLabel key={item.id} {...item} />
        ))}
        <button>생성하기</button>
      </FormStyle>
    </Layout>
  );
}

export default UserForm;

const FormStyle = styled.form`
  text-align: center;
  button {
    font-size: 15px;
    padding: 4px;
  }
`;
