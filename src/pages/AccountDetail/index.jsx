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
      <DetailPageTitle>?????? ??????</DetailPageTitle>
      <AccountDetailContainer>
        <div>
          <div>
            <ColumnTitle>?????? ???</ColumnTitle>
            <ColumnContent>{brokerList[broker_id] ?? '-'}</ColumnContent>
          </div>
          <div>
            <ColumnTitle>?????????</ColumnTitle>
            <ColumnContent>{name}</ColumnContent>
          </div>
          <div>
            <ColumnTitle>?????? ??????</ColumnTitle>
            <ColumnContent>{accountUserIdHashObj[userId] ?? '????????? ?????? ?????? ??????'}</ColumnContent>
          </div>
        </div>
        <div>
          <div>
            <ColumnTitle>?????? ??????</ColumnTitle>
            <ColumnContent>
              {brokerFormatStr === undefined ? number : convertFormat(brokerFormatStr, number)}
            </ColumnContent>
          </div>
          <div>
            <ColumnTitle>?????? ??????</ColumnTitle>
            <ColumnContent>{accountStatusHashObj[status] ?? '-'}</ColumnContent>
          </div>

          <div>
            <ColumnTitle>?????? ????????? ??????</ColumnTitle>
            <ColumnContent>{is_active ? '?????? ?????? ???' : '?????? ?????????'}</ColumnContent>
          </div>
        </div>
        <div>
          <div>
            <ColumnTitle>?????? ?????????</ColumnTitle>
            <ColumnContent>{makeDataFormatTheYearMonthDayToSlash(created_at)}</ColumnContent>
          </div>
          <div>
            <ColumnTitle>?????? ?????????</ColumnTitle>
            <ColumnContent>{makeDataFormatTheYearMonthDayToSlash(updated_at)}</ColumnContent>
          </div>
        </div>
        <div>
          <div>
            <ColumnTitle>?????? ??????</ColumnTitle>
            <ColumnContent>{makeThousandSeparator(assets)} ???</ColumnContent>
          </div>
          <div>
            <ColumnTitle>?????? ??????</ColumnTitle>
            <ColumnContent>{makeThousandSeparator(payments)} ???</ColumnContent>
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
