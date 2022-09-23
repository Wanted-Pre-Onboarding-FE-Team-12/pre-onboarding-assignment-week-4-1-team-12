import { useMemo } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const AccountStatusSelectOption = ({
  accountStatusList,
  selectOptionKey,
  handleUpdateFilteringOption,
}) => {
  const accountState = useMemo(() => {
    return Object.entries(accountStatusList).reduce((acc, cur) => {
      acc.push({ value: cur[1], label: cur[0] });
      return acc;
    }, []);
  }, [accountStatusList]);

  const handleSelectAccountStateOption = option => {
    if (!option) {
      handleUpdateFilteringOption(selectOptionKey, '');
    } else {
      const { value: selectOptionValue } = option;
      handleUpdateFilteringOption(selectOptionKey, selectOptionValue);
    }
  };

  return (
    <AccountStatusSelectBox>
      <Select
        options={accountState}
        isClearable
        onChange={handleSelectAccountStateOption}
        placeholder="계좌 상태를 선택해주세요."
      />
    </AccountStatusSelectBox>
  );
};

export default AccountStatusSelectOption;

const AccountStatusSelectBox = styled.div`
  width: 250px;
  font-size: 14px;
  margin-right: 1rem;
`;
