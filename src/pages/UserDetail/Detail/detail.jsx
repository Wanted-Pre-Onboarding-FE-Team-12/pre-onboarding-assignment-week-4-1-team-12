import { getUserDetail } from '@api/userApi';
import React, { useState, useEffect } from 'react';
import { Descriptions } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import Description from '../Description/description';
import * as S from '../Description/description';
import { INITAL_USER_DETAIL_INFO } from '@utils/INITIAL_USER_DETAIL_INFO';
import { INITIAL_USER_DATA } from '../../../utils/INITIAL_USER_DATA';

const Detail = () => {
  const [userDetailInfo, setUserDetailInfo] = useState(INITIAL_USER_DATA);
  const [detailList, setDetailList] = useState([]);

  useEffect(() => {
    getUserDetail(5).then(res => {
      setUserDetailInfo(res.data);
      // console.log(res.data);
    });

    const value = Object.keys(INITAL_USER_DETAIL_INFO).map(el => {
      const result = INITAL_USER_DETAIL_INFO[el];

      result.value = userDetailInfo[el];
      return result;
    });
    setDetailList(value);
  }, []);

  const dateHandle = date => {
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    let total = `${year}년 ${month}월 ${day}일`;
    return total;
  };

  return (
    <DetailWrap>
      <Descriptions title="사용자 정보" bordered>
        {detailList?.map(({ label, value }, index) => {
          if (index === 2 || index === 6 || index === 7) {
            const date = dateHandle(value);

            return (
              <Descriptions.Item label={label} key={label}>
                <S.DetailSpan>{date}</S.DetailSpan>
              </Descriptions.Item>
            );
          }

          if (index === 5) {
            if (value === 1 || value === 3) {
              return (
                <Descriptions.Item label={label} key={label}>
                  남자
                </Descriptions.Item>
              );
            } else {
              return (
                <Descriptions.Item label={label} key={label}>
                  여자
                </Descriptions.Item>
              );
            }
          }

          return (
            <Descriptions.Item label={label} key={label}>
              <Description descriptionData={value} />
            </Descriptions.Item>
          );
        })}
        {/* <Descriptions.Item label="이름">
          <DetailSpan>{name}</DetailSpan>
        </Descriptions.Item>
        <Descriptions.Item label="성별">
          <DetailSpan>{gender_origin === 1 || gender_origin === 3 ? '남' : '여'}</DetailSpan>
        </Descriptions.Item>
        <Descriptions.Item label="생년월일">
          <DetailSpan>{birth}</DetailSpan>
        </Descriptions.Item>
        <Descriptions.Item label="이메일">
          <DetailSpan>{email}</DetailSpan>
        </Descriptions.Item>
        <Descriptions.Item label="최근 접속">
          <DetailSpan>{last}</DetailSpan>
        </Descriptions.Item>
        <Descriptions.Item label="전화번호">{phone_number}</Descriptions.Item>
        <Descriptions.Item label="나이">{age}세</Descriptions.Item>
        <Descriptions.Item label="주소">{address}</Descriptions.Item>
        <Descriptions.Item label="가입일">{created}</Descriptions.Item>
        <Descriptions.Item label="상세주소">{detail_address}</Descriptions.Item> */}
      </Descriptions>
    </DetailWrap>
  );
};

export default Detail;

const DetailWrap = styled.div`
  margin: 130px 0;
`;

// const DESCRIPTION_CATEGORIES = [
//   '이름',
//   '성별',
//   '생년월일',
//   '이메일',
//   '최근 접속',
//   '전화번호',
//   '나이',
//   '주소',
//   '가입일',
//   '상세주소',
// ];
