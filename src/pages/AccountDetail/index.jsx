import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAccountDetail } from '@api/accountApi';
import Layout from '@layout/index';
import styled from 'styled-components';

/**
 * 서버로 상세 요청 보내기
 * 받은 정보들 화면에 렌더링
 */

const AccountDetail = () => {
  const location = useLocation();
  const accountId = +location.pathname.split('/')[2];

  // server 요청 보내고 받은 응답 데이터 state에 저장
  const [account, setAccount] = useState([]);
  const {
    assets,
    payments,
    user_id,
    is_active,
    broker_id,
    name,
    number,
    status,
    created_at,
    updated_at,
  } = account;

  // useEffect로 바로 요청 보내고 state update 처리
  useEffect(() => {
    const getAccountDetailData = async () => {
      const payload = await getAccountDetail(accountId);
      if (payload) {
        setAccount({ ...payload });
      }
    };
    getAccountDetailData();
  }, []);

  return (
    <Layout>
      <AccountDetailContainer>
        <h1>계좌 정보</h1>
        <div>
          <span>고객 이름</span>
          <span>{user_id}</span>
        </div>
        <div>
          <span>은행 명</span>
          <span>{broker_id}</span>
        </div>
        <div>
          <span>계좌 번호</span>
          <span>{number}</span>
        </div>
        <div>
          <span>계좌 상태</span>
          <span>{status}</span>
        </div>
        <div>
          <span>계좌명</span>
          <span>{name}</span>
        </div>
        <div>
          <span>평가 금액</span>
          <span>{assets}</span>
        </div>
        <div>
          <span>입금 금액</span>
          <span>{payments}</span>
        </div>

        <div>
          <span>계좌 활성화 여부</span>
          <span>{is_active}</span>
        </div>
        <div>
          <span>계좌 계설일</span>
          <span>{created_at}</span>
        </div>
        <div>
          <span>계좌 변경일</span>
          <span>{updated_at}</span>
        </div>
      </AccountDetailContainer>
    </Layout>
  );
};

export default AccountDetail;

const AccountDetailContainer = styled.div`
  background-color: gray;
`;

/**
    <thead style={{ fontSize: '14px', marginRight: '1.5rem' }}>
      <tr>
        {account?.map((title, idx) => (
          <th key={idx}>{title[0]}</th>
        ))}
      </tr>
    </thead>
    <tbody style={{ display: 'flex' }}>
      {account?.map((item, idx) => (
        <tr key={idx}>
          <td>{item[1]}</td>
        </tr>
      ))}
    </tbody>
 */
