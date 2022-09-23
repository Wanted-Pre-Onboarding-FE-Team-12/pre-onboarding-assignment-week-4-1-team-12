import Select from 'react-select';
import styled from 'styled-components';

const AccountActiveSelectOption = ({ selectOptionKey, handleUpdateFilteringOption }) => {
  const option = [
    { value: true, label: '활성화' },
    { value: false, label: '비활성화' },
  ];

  const handleSelectAccountActiveOption = option => {
    if (!option) {
      handleUpdateFilteringOption(selectOptionKey, '');
    } else {
      const { value: selectOptionValue } = option;
      handleUpdateFilteringOption(selectOptionKey, selectOptionValue);
    }
  };

  return (
    <AccountActiveSelectBox>
      <Select
        options={option}
        isClearable
        onChange={handleSelectAccountActiveOption}
        placeholder="계좌 활성화 여부를 선택해주세요."
      />
    </AccountActiveSelectBox>
  );
};

export default AccountActiveSelectOption;

const AccountActiveSelectBox = styled.div`
  width: 250px;
  font-size: 14px;
`;
