import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Descriptions } from 'antd';

import { getUserDetail } from '@api/userApi';
import Description from '../Description/description';
import { INITAL_USER_DETAIL_INFO } from '@utils/INITIAL_USER_DETAIL_INFO';

// CSS
import * as S from '../Description/description';

const Detail = ({ userId }) => {
  const [detailList, setDetailList] = useState([]);

  useEffect(() => {
    getUserDetail(userId).then(res => {
      const value = Object.keys(INITAL_USER_DETAIL_INFO).map(el => {
        const result = INITAL_USER_DETAIL_INFO[el];
        result.value = res.data[el];
        return result;
      });
      setDetailList(value);
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
  margin: 10rem 0;
`;
