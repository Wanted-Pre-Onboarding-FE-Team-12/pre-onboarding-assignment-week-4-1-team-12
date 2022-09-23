import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccounts } from '@api/accountApi';
import AccountSubTitle from './AccountSubTitle';
import AccountBankSelectOption from './AccountBankSelectOption';
import AccountStatusSelectOption from './AccountStatusSelectOption';
import AccountActiveSelectOption from './AccountActiveSelectOption';
import AccountSearch from './AccountSearch';
import PageButton from '@components/PageButton';
import ListItem from './ListItem';
import Layout from '@layout/index';
import styled from 'styled-components';
import useToastMessage from '@hooks/useToastMessage';
import { TOAST_MESSAGE } from '@utils/toastMessage';
import Loading from '@components/Loading';
import {
  getAccountStatus,
  getBrokers,
  getBrokerFormat,
  getUsers,
} from '@store/modules/accountSlice';

const AccountList = () => {
  const dispatch = useDispatch();
  const [accounts, setAccounts] = useState([]);
  const { userList, accountStatusList, brokerList } = useSelector(({ account }) => account);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState('');
  const [filteringOption, setFilteringOption] = useState({
    selectBroker: '',
    selectAccountState: '',
    selectAccountIsActive: '',
    searchQuery: '',
  });
  const [isLoading, setIsLoading] = useState(true);

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

  const handleChangeCurrentPage = useCallback(number => {
    setPage(number);
  }, []);

  const handleUpdateFilteringOption = useCallback(
    (option, value) => {
      setPage(1);
      setFilteringOption({ ...filteringOption, [option]: value });
    },
    [filteringOption],
  );

  const AlertErrorMessage = () => {
    useToastMessage(TOAST_MESSAGE.ACCOUNT.FAILED_TO_GET_LIST, 'error');
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const [response] = await Promise.all([
          getAccounts({ _page: page, _limit: 20 }),
          dispatch(getAccountStatus()),
          dispatch(getBrokers()),
          dispatch(getBrokerFormat()),
          dispatch(getUsers()),
        ]);

        if (response) {
          setAccounts([...response.data]);
          const totalCount = response.headers['x-total-count'];
          if (totalCount) {
            setTotalPage(Math.ceil(parseInt(totalCount) / 20));
          } else {
            setPage(1);
          }
          setIsLoading(false);
        }
      } catch (error) {
        AlertErrorMessage();
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const query = {
      q: filteringOption.searchQuery,
      broker_id: filteringOption.selectBroker,
      status: filteringOption.selectAccountState,
      is_active: filteringOption.selectAccountIsActive,
      _page: page,
      _limit: 20,
    };

    const getData = async () => {
      try {
        let response = await getAccounts(query);
        if (response) {
          setAccounts([...response.data]);
          const totalCount = response.headers['x-total-count'];
          if (totalCount) {
            setTotalPage(Math.ceil(parseInt(totalCount) / 20));
          } else {
            setPage(1);
          }
          setIsLoading(false);
        }
      } catch (error) {
        AlertErrorMessage();
        setIsLoading(false);
      }
    };
    getData();
  }, [filteringOption, page]);

  if (isLoading) return <Loading />;

  return (
    <Layout>
      <AccountListContainer>
        <OptionContainerBox>
          <div>
            <AccountBankSelectOption
              brokerList={brokerList}
              selectOptionKey="selectBroker"
              handleUpdateFilteringOption={handleUpdateFilteringOption}
            />
            <AccountStatusSelectOption
              accountStatusList={accountStatusList}
              selectOptionKey="selectAccountState"
              handleUpdateFilteringOption={handleUpdateFilteringOption}
            />
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
        <PageButton
          totalPage={totalPage}
          page={page}
          handleChangeCurrentPage={handleChangeCurrentPage}
        />
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
