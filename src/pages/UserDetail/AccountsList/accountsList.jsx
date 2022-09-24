import React, { useEffect } from 'react';
import { Card } from 'antd';

import 'antd/dist/antd.css';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount } from '@store/modules/userSlice';

const gridStyle = {
  width: '33%',
  textAlign: 'center',
};

const AccountsList = props => {
  const dispatch = useDispatch();
  const { account } = useSelector(state => state.user);
  const filteredValue = account.filter(({ user_id }) => user_id === +props.userId);

  useEffect(() => {
    dispatch(getAccount());
  }, []);

  return (
    <>
      <Card title="계좌 목록">
        {filteredValue?.map(account => {
          let assets = (account.assets * 1).toLocaleString('ko-KR');

          return (
            <Card.Grid style={gridStyle} key={account.id}>
              <AccountsWrap>
                <AccountTitle>{account.name}</AccountTitle>
              </AccountsWrap>
              <AccountAssets>{assets}원</AccountAssets>
            </Card.Grid>
          );
        })}
      </Card>
    </>
  );
};

export default AccountsList;

const AccountsWrap = styled.div``;

const AccountTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const AccountAssets = styled(AccountTitle)`
  font-size: 20px;
`;
