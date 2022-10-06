# pre-onboarding-assignment-week-4-1-team-12

<br/>

#### <a href='https://github.com/orgs/Wanted-Pre-Onboarding-FE-Team-12/projects/5'>Project 칸반보드</a>

# 목차

- [실행](#1-실행)
- [폴더구조](#2-폴더구조)
- [과제 달성 사항 및 해결 방법](#3과제-달성-사항-및-해결-방법)

<br/>
<br/>

## 팀원

| 이름                                        | 역할                |
| ------------------------------------------- | ------------------- |
| [김재훈](https://github.com/rmawogns)       | 사용자 목록 페이지 |
| [노기훈](https://github.com/ch4md0m)        | 로그인, 공통 컴포넌트, 배포 |
| [유지예](https://github.com/jiye-7)         | 계좌 리스트, 계좌 상세페이지, 로딩, 페이지별 이름 적용 |
| [이우윤](https://github.com/EEOOOO)         | 계좌 리스트, 계좌 상세페이지 |
| [백광현](https://github.com/ghbaekdev)      | 사용자 상세 페이지|

<br/>
<br/>

## Tech Stack

<div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
    <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</div>

<br/>
<br/>
 
## 1. 실행

### 회원가입 전송

- 이메일은 `@` 문자가 포함되어야 합니다.
- 비밀번호는 8자리 이상입니다.

```sh
 curl -d "email=wanted-team-12@dco.com&password=test1234" -X POST https://fint-api.herokuapp.com/users/signup
```

<br/>

### 실행 방법

```sh
npm install

npm run start
```

<br/>

### 데모 링크

[🚀 데모링크 바로가기](https://wanted-team12-fint.netlify.app/)

<br/>
<br/>

## 2. 폴더구조

```
src
 ┣ api
 ┃ ┣ accountApi.js
 ┃ ┣ authApi.js
 ┃ ┣ index.js
 ┃ ┗ userApi.js
 ┣ assets
 ┣ components
 ┃ ┣ Button
 ┃ ┣ Footer
 ┃ ┣ Header
 ┃ ┣ InputWIthLabel
 ┃ ┣ Loading
 ┃ ┣ MenuItem
 ┃ ┣ PageButton
 ┃ ┃ ┗ Button
 ┃ ┗ Sidebar
 ┣ hooks
 ┣ layout
 ┣ pages
 ┃ ┣ AccountDetail
 ┃ ┃ ┗ index.jsx
 ┃ ┣ AccountList
 ┃ ┃ ┣ AccountActiveSelectOption
 ┃ ┃ ┣ AccountBankSelectOption
 ┃ ┃ ┣ AccountSearch
 ┃ ┃ ┣ AccountStatusSelectOption
 ┃ ┃ ┣ AccountSubTitle
 ┃ ┃ ┣ ListItem
 ┃ ┃ ┗ index.jsx
 ┃ ┣ Login
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┗ LoginForm
 ┃ ┃ ┗ index.jsx
 ┃ ┣ UserDetail
 ┃ ┃ ┣ AccountsList
 ┃ ┃ ┣ Description
 ┃ ┃ ┣ Detail
 ┃ ┃ ┗ index.jsx
 ┃ ┗ UserList
 ┃ ┃ ┣ Components
 ┃ ┃ ┗ index.jsx
 ┣ store
 ┃ ┣ modules
 ┃ ┃ ┣ accountSlice.js
 ┃ ┃ ┣ authSlice.js
 ┃ ┃ ┣ commonSlice.js
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ userSlice.js
 ┃ ┗ store.js
 ┣ styles
 ┃ ┣ globalStyle.js
 ┃ ┗ theme.js
 ┣ utils
 ┃ ┣ storage
 ┃ ┣ INITIAL_USER_DATA.js
 ┃ ┣ INITIAL_USER_DETAIL_INFO.js
 ┃ ┣ account.js
 ┃ ┣ menuItem.js
 ┃ ┣ toastMessage.js
 ┃ ┣ usersListCategory.js
 ┃ ┗ validation.js
 ┣ App.js
 ┗ index.js
```

<br/>
<br/>

## 3.과제 달성 사항 및 해결 방법

### 1. 공통
<details>
<summary>axios interceptor 적용</summary>

```jsx
import axios from 'axios';
import { getAccessToken } from '@utils/storage/token';
export const instance = axios.create({
  baseURL: 'https://fint-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
instance.interceptors.request.use(
  config => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }
    return config;
  },
  error => {
    console.log(error, 'error');
    return;
  },
);
```

</details>

- auth 처리
- alert 관련 공통 모듈 사용
- loading 처리
- pathname을 활용하여 각 페이지 타이틀 표시
- 사이드바 토글 상태 유지 구현
- redux-toolkit을 사용한 상태관리

<br/>
<br/>

### 2. user list 페이지

#### 2-1. user list 페이지

- 사용자 목록 표시
- 고객명, 휴대폰 번호 마스킹 처리
- 목록에서 활성화 여부, 임지원 계좌 여부 필터링
- 검색 기능 구현
- 페이지네이션 기능 구현
- 신규 사용자 추가 기능 구현
- 사용자 삭제 기능 구현
- 사용자명 변경 기능 구현
- 사용자 이름 클릭 시 사용자 상세페이지로 이동

<br/>

#### 2-2. user detail 페이지

- 사용자 리스트페이지에서 클릭시 유저 상세페이지로 이동.
- 해당 아이디로 계좌 목록 필터하여 해당 사용자의 계좌목록 리스트 구현.

<br/>

### 3. account list 페이지
<details>
<summary>account lis 표기 정보</summary>
<br/>
- 계좌 리스트에있는 account 1개의 `id`와 ```user id```를 참조하여 실제 이름으로 보여지도록 처리 <br/>
- 브로커명은 brokers.json 를 참조하여 실제 이름으로 보여지도록 처리 <br/>
- 계좌번호는 앞 뒤 각각 두글자를 제외하고 나머지는 글자수에 맞게 ```*``` 글자로 마스킹 처리를 하는 함수를 모듈로 처리 <br/>
- 계좌상태는 accountStatus.json 를 참조하여 실제 이름으로 보여지도록 처리 <br/>
- 평가금액, 입금금액은 정규표현식을 사용하여 숫자 3자리 수 마다 ```,``` 표기 <br/>
- 날짜는 년/월/일로 표기되도록 정규표현식으로 처리 <br/>

```js
// 금액에 대한 정규표현식
export const makeThousandSeparator = value => {
  if (!value) return value;
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',').split('.')[0];
};
// 계좌번호 마스킹 처리
export const makeAccountNumberMasking = value => {
  if (!value) return value;
  return value.replace(/(?=(\d{2}))[0-9\\-](?<=(\d{2}))/g, '*');
};
// 기존 응답값으로 넘어오는 데이터에서 년/월/일만 사용하는 정규표현식
export const makeDataFormatTheYearMonthDay = value => {
  if (!value) return value;
  return value.split('T')[0];
};
// 년/월/일을 년-월-일로 처리하는 정규표현식
export const makeDataFormatTheYearMonthDayToSlash = value => {
  if (!value) return value;
  return value.split('T')[0].replace(/-/g, ' / ');
};
```
</details>

<details>
<summary>페이지네이션</summary>
<br/>
- `response.headers['x-total-count']` 값을 이용하여 전체 글의 수를 구해 보여줘야 될 페이지 계산 처리 <br/>

```js
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
```
</details>

<details>
<summary>필터링, 검색기능</summary>
<br/>
- 증권사명, 계좌 활성화 여부, 계좌 상태들을 react-select를 사용하여 디자인 <br/>
- 값변경이 일어날 때 마다 선택한 옵션의 값들을 업데이트 시켜 서버로 요청을 보내 응답 결과를 핸들링 <br/>

```js
const [filteringOption, setFilteringOption] = useState({
  selectBroker: '',
  selectAccountState: '',
  selectAccountIsActive: '',
  searchQuery: '',
});
const handleUpdateFilteringOption = useCallback((option, value) => {
  setPage(1);
  setFilteringOption({ ...filteringOption, [option]: value });
}, [filteringOption]);
```
</details>

<details>
<summary>객체, 배열들의 값을 참조</summary>
<br/>
- 서로 다른 객체, 배열들, key-value의 값들을 로직에 맞게 값을 핸들링하어 사용하였습니다. <br/>

```js
if (userList) {
  return userList.reduce((acc, cur) => {
  acc[cur.id] = cur.name;
  return acc;
  }, {});
}
}, [userList]);

const accountStatusHashObj = useMemo(() => {
  if (accountStatusList) {
  const reverseKeyValue = Object.entries(accountStatusList).map(([key,value]) => [value, key]);
  return Object.fromEntries(reverseKeyValue);
}
  return {};
}, [accountStatusList]);
```
</details>

<br/>

#### 4. account detail 페이지
- account list의 정보를 상세페이지에서 볼 수 있도록 구현 <br/>

<br/>

#### 5. login 페이지
- 로그인 후 `accessToken` 을 `localStorage` 에 저장.
- 로그인 유지 기능 구현.
