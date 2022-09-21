import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { getUserAccount } from '../../../api/userApi';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const gridStyle = {
  width: '33%',
  textAlign: 'center',
};

const AccountsList = () => {
  const [userAcountInfo, setUserAccountInfo] = useState([]);

  useEffect(() => {
    getUserAccount().then(res => {
      const accounts = res.data.filter(({ user_id }) => user_id === 1);
      setUserAccountInfo(accounts);
    });
  }, []);

  console.log(userAcountInfo);

  return (
    <>
      <Card title="계좌 목록">
        {userAcountInfo?.map(account => {
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
