import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAccountDetail } from '@api/accountApi';
import { useSelector } from 'react-redux';
import { makeThousandSeparator } from '@utils/account';
import Layout from '@layout/index';
import styled from 'styled-components';
import Loading from '@components/Loading';

/**
 * issue
 * account의 id가 고유하지 않은 값 같음 (중복되는 id가 많아서 계좌 id를 넘겨도 정보가 일치하지 않음)
 */
const AccountDetail = () => {
  const location = useLocation();
  const accountId = +location.pathname.split('/')[2];
  const [isLoading, setIsLoading] = useState(true);
  const { userList, accountStatusList, brokerList } = useSelector(({ account }) => account);
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

  const accountUserIdHashObj = useMemo(() => {
    return userList.reduce((acc, cur) => {
      acc[cur.id] = cur.name;
      return acc;
    }, {});
  }, [userList]);

  const accountStatusHashObj = useMemo(() => {
    const revertKeyValue = Object.entries(accountStatusList).map(([key, value]) => [value, key]);
    return Object.fromEntries(revertKeyValue);
  }, [accountStatusList]);

  useEffect(() => {
    const getAccountDetailData = async () => {
      try {
        const payload = await getAccountDetail(accountId);
        if (payload) {
          setAccount({ ...payload });
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    getAccountDetailData();
  }, [accountId]);

  if (isLoading) return <Loading />;

  return (
    <Layout>
      <AccountDetailContainer>
        <h1>계좌 정보</h1>
        <div>
          <span>고객 이름</span>
          <span>{accountUserIdHashObj[user_id] ?? '-'}</span>
        </div>
        <div>
          <span>은행 명</span>
          <span>{brokerList[broker_id] ?? '-'}</span>
        </div>
        <div>
          <span>계좌 번호</span>
          <span>{number}</span>
        </div>
        <div>
          <span>계좌 상태</span>
          <span>{accountStatusHashObj[status] ?? '-'}</span>
        </div>
        <div>
          <span>계좌명</span>
          <span>{name}</span>
        </div>
        <div>
          <span>평가 금액</span>
          <span>{makeThousandSeparator(assets)}</span>
        </div>
        <div>
          <span>입금 금액</span>
          <span>{makeThousandSeparator(payments)}</span>
        </div>
        <div>
          <span>계좌 활성화 여부</span>
          <span>{is_active ? '활성화' : '비활성화'}</span>
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
