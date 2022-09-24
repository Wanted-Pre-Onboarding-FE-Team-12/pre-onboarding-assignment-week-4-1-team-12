import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

import { getAccountList } from '../../../api/accountApi';

const gridStyle = {
  width: '33%',
  textAlign: 'center',
};

const AccountsList = props => {
  // const dispatch = useDispatch();
  // const { account } = useSelector(state => {
  //   console.log('state ', state?.user.users);
  //   return state.user;
  // });
  // const filteredValue = account.filter(({ user_id }) => user_id === props.userId);
  // console.log('account ', account);

  // useEffect(() => {
  //   dispatch(getDetailAccount());
  // }, []);
  const [accountInfo, setAccountInfo] = useState([]);

  useEffect(() => {
    getAccountList().then(res => {
      const result = res.data.filter(el => el.user_id === parseInt(props.userId));
      setAccountInfo(result);
    });
  }, []);

  return (
    <>
      <Card title="계좌 목록">
        {accountInfo?.map(account => {
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
