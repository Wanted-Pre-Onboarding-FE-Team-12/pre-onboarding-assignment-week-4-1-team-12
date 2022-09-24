import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAccountDetail } from '@api/accountApi';
import { useSelector } from 'react-redux';
import { makeThousandSeparator, makeDataFormatTheYearMonthDayToSlash } from '@utils/account';
import Layout from '@layout/index';
import styled from 'styled-components';
import Loading from '@components/Loading';

const AccountDetail = () => {
  const location = useLocation();
  const accountId = +location.pathname.split('/')[2];
  const userId = +location.pathname.split('/')[3];
  const [isLoading, setIsLoading] = useState(true);
  const { userList, accountStatusList, brokerList, brokerFormatList } = useSelector(
    ({ account }) => account,
  );
  const [account, setAccount] = useState([]);
  const { assets, payments, is_active, broker_id, name, number, status, created_at, updated_at } =
    account;
  const [brokerFormatStr, setBrokerFormatStr] = useState('');

  const accountUserIdHashObj = useMemo(() => {
    return userList.reduce((acc, cur) => {
      if (!cur.name) return acc;
      acc[cur.id] = cur.name;
      return acc;
    }, {});
  }, [userList]);

  const accountStatusHashObj = useMemo(() => {
    const revertKeyValue = Object.entries(accountStatusList).map(([key, value]) => [value, key]);
    return Object.fromEntries(revertKeyValue);
  }, [accountStatusList]);

  const convertFormat = (str, num) => {
    const numArr = num.toString();
    let result = '';
    let numIndex = 0;

    for (const character of str) {
      if (character === '-') {
        result += '-';
      } else {
        result += numArr[numIndex++];
      }
    }
    return result;
  };

  useEffect(() => {
    const getAccountDetailData = async () => {
      try {
        const payload = await getAccountDetail(accountId, userId);
        if (payload) {
          setAccount({ ...payload[0] });
          setIsLoading(false);
          setBrokerFormatStr(brokerFormatList[0][parseInt(broker_id)]);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    getAccountDetailData();
  }, [accountId, broker_id, brokerFormatList]);

  if (isLoading) return <Loading />;

  return (
    <Layout>
      <DetailPageTitle>계좌 정보</DetailPageTitle>
      <AccountDetailContainer>
        <div>
          <div>
            <ColumnTitle>은행 명</ColumnTitle>
            <ColumnContent>{brokerList[broker_id] ?? '-'}</ColumnContent>
          </div>
          <div>
            <ColumnTitle>계좌명</ColumnTitle>
            <ColumnContent>{name}</ColumnContent>
          </div>
          <div>
            <ColumnTitle>고객 이름</ColumnTitle>
            <ColumnContent>{accountUserIdHashObj[userId] ?? '고객명 오류 확인 필요'}</ColumnContent>
          </div>
        </div>
        <div>
          <div>
            <ColumnTitle>계좌 번호</ColumnTitle>
            <ColumnContent>
              {brokerFormatStr === undefined ? number : convertFormat(brokerFormatStr, number)}
            </ColumnContent>
          </div>
          <div>
            <ColumnTitle>계좌 상태</ColumnTitle>
            <ColumnContent>{accountStatusHashObj[status] ?? '-'}</ColumnContent>
          </div>

          <div>
            <ColumnTitle>계좌 활성화 여부</ColumnTitle>
            <ColumnContent>{is_active ? '계좌 사용 중' : '계좌 미사용'}</ColumnContent>
          </div>
        </div>
        <div>
          <div>
            <ColumnTitle>계좌 계설일</ColumnTitle>
            <ColumnContent>{makeDataFormatTheYearMonthDayToSlash(created_at)}</ColumnContent>
          </div>
          <div>
            <ColumnTitle>계좌 변경일</ColumnTitle>
            <ColumnContent>{makeDataFormatTheYearMonthDayToSlash(updated_at)}</ColumnContent>
          </div>
        </div>
        <div>
          <div>
            <ColumnTitle>평가 금액</ColumnTitle>
            <ColumnContent>{makeThousandSeparator(assets)} 원</ColumnContent>
          </div>
          <div>
            <ColumnTitle>입금 금액</ColumnTitle>
            <ColumnContent>{makeThousandSeparator(payments)} 원</ColumnContent>
          </div>
        </div>
      </AccountDetailContainer>
    </Layout>
  );
};

export default AccountDetail;

const DetailPageTitle = styled.h1`
  font-size: 24px;
  margin: 0 0 3rem 1rem;
`;

const AccountDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 8rem 3rem;
  background-color: #efebe9;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  margin-bottom: 3rem;
  & > div {
    width: 80%;
    background-color: #fafafa;
    margin: 1rem 0;
  }
  & > div:nth-child(1),
  div:nth-child(2),
  div:nth-child(3),
  div:nth-child(4) {
    display: flex;
    flex-direction: row;
    align-items: center;
    & > div {
      width: 50%;
    }
  }
`;

const ColumnTitle = styled.h3`
  font-size: 18px;
  display: inline;
  background-color: #d7ccc8;
  padding: 1.5rem;
  width: 170px;
  text-align: center;
`;

const ColumnContent = styled.span`
  font-size: 16px;
  padding-left: 20px;
`;
