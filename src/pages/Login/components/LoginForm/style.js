import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40rem;
  margin: 10rem auto 0;
`;

export const Header = styled.header`
  text-align: center;
  font-size: 4rem;
  margin: 5rem 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
  span {
    display: block;
    padding-bottom: 0.8rem;
    font-size: 1.8rem;
    font-weight: 500;
    color: ${props => (props.error ? props.theme.colors.lightRed : `#111`)};
    cursor: pointer;
  }
  input {
    background: ${props => (props.error ? `rgba(255, 199, 199, 0.2)` : `#fff`)};
    width: 100%;
    height: 4rem;
    margin: 0 0 2rem;
    padding: 2.4rem 1.2rem;
    font-size: 1.8rem;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid ${props => (props.error ? props.theme.colors.lightRed : `#dbdbdb`)};
    outline: none;
    transition: border 80ms ease-out, box-shadow 80ms ease-out;
    &:focus {
      box-shadow: 0 0 0 2px
        ${props => (props.error ? props.theme.colors.lightRed : `rgba(130, 224, 250, 0.5)`)};
    }
  }
`;

export const Error = styled.div`
  margin: -1rem 0 1.5rem;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.lightRed};
`;
