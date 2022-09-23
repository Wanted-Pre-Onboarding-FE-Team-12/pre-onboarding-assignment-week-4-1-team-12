import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAccounts,
  getAccountStatus,
  getBrokers,
  getBrokerFormat,
  getUsers,
} from '@store/modules/accountSlice';
import { getAccountFilteringList } from '@api/accountApi';
import AccountSubTitle from './AccountSubTitle';
import AccountBankSelectOption from './AccountBankSelectOption';
import AccountStatusSelectOption from './AccountStatusSelectOption';
import AccountActiveSelectOption from './AccountActiveSelectOption';
import AccountSearch from './AccountSearch';
import ListItem from './ListItem';
import Layout from '@layout/index';
import styled from 'styled-components';

const AccountList = () => {
  const dispatch = useDispatch();
  const [accounts, setAccounts] = useState([]);
  const { userList, accountStatusList, brokerList } = useSelector(({ account }) => account);
  // 은행명, 계좌상태, 계좌 활성화 여부, 검색어 상태값
  const [filteringOption, setFilteringOption] = useState({
    selectBroker: '',
    selectAccountState: '',
    selectAccountIsActive: false,
    searchQuery: '',
  });

  const userIdHashObj = useMemo(() => {
    if (userList) {
      return userList.reduce((acc, cur) => {
        acc[cur.id] = cur.name;
        return acc;
      }, {});
    }
  }, [userList]);

  const accountStatusHashObj = useMemo(() => {
    if (accountStatusList) {
      const reverseKeyValue = Object.entries(accountStatusList).map(([key, value]) => [value, key]);
      return Object.fromEntries(reverseKeyValue);
    }
    return {};
  }, [accountStatusList]);

  // 은행명, 계좌상태, 계좌 활성화 여부에 따른 state 업데이트 함수
  const handleUpdateFilteringOption = (option, value) => {
    // 업데이트 된 종류에 따라 state 업데이트
    setFilteringOption({ ...filteringOption, [option]: value });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const [response] = await Promise.all([
          dispatch(getAccounts()),
          dispatch(getAccountStatus()),
          dispatch(getBrokers()),
          dispatch(getBrokerFormat()),
          dispatch(getUsers()),
        ]);

        if (response.payload) {
          setAccounts([...response.payload].splice(0, 20));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  /** select option들 값 변경 될 때 마다 필터링 요청 */
  useEffect(() => {
    const query = {
      q: filteringOption.searchQuery,
      broker_id: filteringOption.selectBroker,
      status: filteringOption.selectAccountState,
      is_active: filteringOption.selectAccountIsActive,
    };

    const getFilteringData = async () => {
      try {
        let response = await getAccountFilteringList(query);
        console.log(response);
        setAccounts([...response]);
      } catch (error) {
        console.log(error);
      }
    };
    getFilteringData();
  }, [filteringOption]);

  return (
    <Layout>
      <AccountListContainer>
        <OptionContainerBox>
          <div>
            {/** 은행 선택 옵션 */}
            <AccountBankSelectOption
              brokerList={brokerList}
              selectOptionKey="selectBroker"
              handleUpdateFilteringOption={handleUpdateFilteringOption}
            />
            {/** 계좌 상태별 옵션 */}
            <AccountStatusSelectOption
              accountStatusList={accountStatusList}
              selectOptionKey="selectAccountState"
              handleUpdateFilteringOption={handleUpdateFilteringOption}
            />
            {/** 계좌 활성화 여부 옵션 */}
            <AccountActiveSelectOption
              selectOptionKey="selectAccountIsActive"
              handleUpdateFilteringOption={handleUpdateFilteringOption}
            />
          </div>
          <div>
            <AccountSearch
              selectOptionKey="searchQuery"
              handleUpdateFilteringOption={handleUpdateFilteringOption}
            />
          </div>
        </OptionContainerBox>
        <AccountSubTitle />
        {accounts?.map((account, idx) => (
          <ListItem
            key={idx}
            account={account}
            userIdHashObj={userIdHashObj}
            accountStatusHashObj={accountStatusHashObj}
          />
        ))}
      </AccountListContainer>
    </Layout>
  );
};

export default AccountList;

const AccountListContainer = styled.div``;

const OptionContainerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  > div:first-child {
    display: flex;
  }
`;
