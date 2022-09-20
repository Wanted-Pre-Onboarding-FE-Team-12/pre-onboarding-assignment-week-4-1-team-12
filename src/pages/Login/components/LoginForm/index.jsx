import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import { login } from '@store/modules/authSlice';
import useInput from '@hooks/useInput';
import { validateEmail, validatePassword } from '@utils/validation';

// CSS
import { Error, Form, Header, Label, Wrapper } from './style';
import { Button } from '@components/Button';

const LoginForm = () => {
  const { isLoggedIn, fetchLoginState } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: onChangeEmail,
    inputBlurHandler: onBlurEmail,
  } = useInput(validateEmail);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: onChangePassword,
    inputBlurHandler: onBlurPassword,
  } = useInput(validatePassword);

  const formIsValid = emailIsValid && passwordIsValid;

  // Form Submit
  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Wrapper>
      {isLoggedIn && <Navigate to="/users" replace />}
      <Header>Welcome, Admin!</Header>
      <Form onSubmit={formSubmitHandler}>
        <Label id="email-label" error={emailHasError}>
          <span>이메일 주소</span>
          <div>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
              onBlur={onBlurEmail}
            />
          </div>
          {emailHasError && <Error>이메일 형식(@포함)을 확인해주세요.</Error>}
        </Label>
        <Label id="password-label" error={passwordHasError}>
          <span>비밀번호</span>
          <div>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              onBlur={onBlurPassword}
            />
          </div>
          {passwordHasError && <Error>비밀번호를 8자 이상으로 설정해주세요.</Error>}
        </Label>
        <Button type="submit" disabled={!formIsValid}>
          {fetchLoginState === 'LOADING' ? (
            <ThreeDots
              height="36"
              width="70"
              radius="9"
              color="#fff"
              wrapperStyle={{ display: 'block' }}
              ariaLabel="three-dots-loading"
              visible={true}
            />
          ) : (
            '로그인'
          )}
        </Button>
      </Form>
    </Wrapper>
  );
};

export default LoginForm;
