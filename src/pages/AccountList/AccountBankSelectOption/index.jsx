import { useMemo } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const AccountBankSelectOption = ({ brokerList, selectOptionKey, handleUpdateFilteringOption }) => {
  const handleSelectBankOption = option => {
    if (!option) {
      handleUpdateFilteringOption(selectOptionKey, '');
    } else {
      const { value: selectOptionValue } = option;
      handleUpdateFilteringOption(selectOptionKey, selectOptionValue);
    }
  };

  const brokers = useMemo(() => {
    return Object.entries(brokerList)?.reduce((acc, cur) => {
      acc.push({ value: cur[0], label: cur[1] });
      return acc;
    }, []);
  }, [brokerList]);

  return (
    <AccountBankSelectBox>
      <Select
        options={brokers}
        isClearable
        onChange={handleSelectBankOption}
        placeholder="증권사를 선택해주세요."
      />
    </AccountBankSelectBox>
  );
};

export default AccountBankSelectOption;

const AccountBankSelectBox = styled.div`
  width: 250px;
  font-size: 14px;
  margin-right: 1rem;
`;
