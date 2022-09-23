import React from 'react';
import styled from 'styled-components';

const Description = ({ descriptionData }) => {
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
