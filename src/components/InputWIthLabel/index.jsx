import React from 'react';
import styled from 'styled-components';

function InputWithLabel(props) {
  const { value, onChange, id, label, type } = props;
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} checked={value} onChange={onChange}></input>
    </Container>
  );
}

export default InputWithLabel;

const Container = styled.div`
  margin-bottom: 10px;
  padding: 10px 0;
  label {
    display: inline-block;
    width: 150px;
    font-size: 20px;
    margin-right: 15px;
  }
  input {
    height: 25px;
  }
`;
