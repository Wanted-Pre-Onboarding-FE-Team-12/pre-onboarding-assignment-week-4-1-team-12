import React from 'react';

const AccountItem = ({ account }) => {
  const {
    //id, //그냥 아이디
    //user_id,
    uuid, // 이거 참조해서 user_name나와야함.
    broker_id, // brockers.json으로 브로커명 보여야함
    status, //운용중, accountStatus.json 를 참조하여 실제 이름으로 보여져야 합니다.
    number, //앞 뒤 각각 두글자를 제외하고 나머지는 글자수에 맞게 * 글자로 마스킹 처리가 필요합니다.
    name,
    assets,
    payments,
    is_active,
    created_at,
    //updated_at
  } = account;

  function applyCommas(number) {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  function accountNumberMasking(number) {
    return number.replace(/(?<=\d{2})\d(?=\d{2})/g, '*');
  }
  function remainDate(dateAndTime){ 
    const date = dateAndTime.split('T')[0] 
    return date
  }
  return (
    <tr>
      <td>{uuid}</td>
      <td>{broker_id}</td>
      <td>{accountNumberMasking(number)}</td>
      <td>{status}</td>
      <td>{name}</td>
      <td>{applyCommas(assets)}</td>
      <td>{applyCommas(payments)}</td>
      <td>{is_active ? '✅' : '⛔'}</td>
      <td>{remainDate(created_at)}</td>
    </tr>
  );
};

export default AccountItem;
