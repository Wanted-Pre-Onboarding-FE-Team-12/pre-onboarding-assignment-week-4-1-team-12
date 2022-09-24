import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';

const AccountSearch = ({ selectOptionKey, handleUpdateFilteringOption }) => {
  const [inputSearchValue, setInputSearchValue] = useState('');

  const handleInputValueUpdate = e => {
    setInputSearchValue(e.target.value);
  };

  const handleAccountSearchSubmit = e => {
    if (!inputSearchValue) {
      handleUpdateFilteringOption(selectOptionKey, '');
    } else {
      handleUpdateFilteringOption(selectOptionKey, inputSearchValue);
    }
    e.preventDefault();
  };

  return (
    <AccountSearchBox>
      <form onSubmit={handleAccountSearchSubmit}>
        <input
          type="text"
          value={inputSearchValue}
          onChange={handleInputValueUpdate}
          placeholder="검색할 단어를 입력해주세요."
        />
        <button type="submit">
          <ImSearch />
        </button>
      </form>
    </AccountSearchBox>
  );
};

export default AccountSearch;

const AccountSearchBox = styled.div`
  > form {
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 250px;
    margin-right: 1rem;
    padding: 1rem;
    border-radius: 5px;
    font-size: 14px;

    input {
      width: 90%;
      border: none;
      background: none;
    }

    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      cursor: pointer;
    }
  }
`;
