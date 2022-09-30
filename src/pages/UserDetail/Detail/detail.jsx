import { getUserDetail } from '@api/userApi';
import React, { useState, useEffect } from 'react';
import { Descriptions } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import Description from '../Description/description';
import * as S from '../Description/description';
import { INITAL_USER_DETAIL_INFO } from '@utils/INITIAL_USER_DETAIL_INFO';
// import { INITIAL_USER_DATA } from '../../../utils/INITIAL_USER_DATA';

const Detail = ({ userId }) => {
  // const [userDetailInfo, setUserDetailInfo] = useState(INITIAL_USER_DATA);
  const [detailList, setDetailList] = useState([]);

  useEffect(() => {
    getUserDetail(userId).then(res => {
      const value = Object.keys(INITAL_USER_DETAIL_INFO).map(el => {
        const result = INITAL_USER_DETAIL_INFO[el];
        result.value = res.data[el];
        return result;
      });
      setDetailList(value);
      // setUserDetailInfo(res.data);
    });
  }, []);

  const dateHandle = date => {
    try {
      let year = date.slice(0, 4);
      let month = date.slice(5, 7);
      let day = date.slice(8, 10);
      let total = `${year}년 ${month}월 ${day}일`;
      return total;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <DetailWrap>
      <Descriptions title="사용자 정보" bordered>
        {detailList?.map(({ label, value }, index) => {
          if (index === 2 || index === 6 || index === 7) {
            const date = dateHandle(value);
            console.log(value);
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
                  <S.DetailSpan>남자</S.DetailSpan>
                </Descriptions.Item>
              );
            } else {
              return (
                <Descriptions.Item label={label} key={label}>
                  <S.DetailSpan>여자</S.DetailSpan>
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
