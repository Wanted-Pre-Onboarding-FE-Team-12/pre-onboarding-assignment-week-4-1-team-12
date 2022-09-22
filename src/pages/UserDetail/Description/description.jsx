import React from 'react';
import styled from 'styled-components';

const Description = ({ descriptionData }) => {
  // const dateHandle = date => {
  //   let year = date.slice(0, 4);
  //   let month = date.slice(5, 7);
  //   let day = date.slice(8, 10);
  //   let total = `${year}년 ${month}월 ${day}일`;
  //   return total;
  // };

  // const birth = dateHandle(birth_date);

  // const created = dateHandle(created_at);

  // const last = dateHandle(last_login);
  return (
    <>
      <DetailSpan>{descriptionData}</DetailSpan>
    </>
  );
};

export default Description;

export const DetailSpan = styled.span`
  font-weight: 500;
  font-size: 17px;
`;
