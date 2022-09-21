import { getUserDetail } from '@api/userApi';
import React, { useState, useEffect } from 'react';
import { Descriptions } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
// import { useParams } from 'react-router-dom';

const INITAL_USER_DETAIL_INFO = {
  address: '',
  age: 0,
  birth_date: '',
  created_at: '',
  detail_address: '',
  email: '',
  gender_origin: '',
  last_login: '',
  name: '',
  phone_number: '',
  updated_at: '',
};

const Detail = () => {
  const [userDetailInfo, setUserDetailInfo] = useState(INITAL_USER_DETAIL_INFO);

  useEffect(() => {
    getUserDetail(1).then(res => setUserDetailInfo(res.data));
  }, []);

  const {
    address,
    age,
    birth_date,
    created_at,
    detail_address,
    email,
    gender_origin,
    last_login,
    name,
    phone_number,
  } = userDetailInfo;

  // const params = useParams();
  // console.log(params.id);

  const birth = dateHandle(birth_date);

  const created = dateHandle(created_at);

  const last = dateHandle(last_login);

  return (
    <DetailWrap>
      <Descriptions title="사용자 정보" bordered>
        <Descriptions.Item label="이름">{name}</Descriptions.Item>
        <Descriptions.Item label="성별">
          {gender_origin === 1 || gender_origin === 3 ? '남' : '여'}
        </Descriptions.Item>
        <Descriptions.Item label="생년월일">{birth}</Descriptions.Item>
        <Descriptions.Item label="이메일">{email}</Descriptions.Item>
        <Descriptions.Item label="최근 접속">{last}</Descriptions.Item>
        <Descriptions.Item label="전화번호">{phone_number}</Descriptions.Item>
        <Descriptions.Item label="나이">{age}세</Descriptions.Item>
        <Descriptions.Item label="주소">{address}</Descriptions.Item>
        <Descriptions.Item label="가입일">{created}</Descriptions.Item>
        <Descriptions.Item label="상세주소">{detail_address}</Descriptions.Item>
      </Descriptions>
    </DetailWrap>
  );
};

export default Detail;

const dateHandle = date => {
  let year = date.slice(0, 4);
  let month = date.slice(5, 7);
  let day = date.slice(8, 10);
  let total = `${year}년 ${month}월 ${day}일`;
  return total;
};

const DetailWrap = styled.div`
  margin: 130px 0;
`;
