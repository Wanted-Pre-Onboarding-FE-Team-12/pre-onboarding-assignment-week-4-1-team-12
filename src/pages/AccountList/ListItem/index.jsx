import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { makeThousandSeparator, makeAccountNumberMasking } from '@utils/account';
import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';

/**
 * issue
 * api 명세서가 없어서 unique key를 id라 생각해서 디테일 페이지에 id를 넘겨주는데 id가 unique한 값이 아닌 거 같음
 * account list에 중복되는 id가 많음
 */
const ListItem = ({ account, userIdHashObj, accountStatusHashObj }) => {
  const { broker_id, id, user_id, status, number, name, assets, payments, is_active, created_at } =
    account;
  const navigate = useNavigate();
  const { brokerList } = useSelector(({ account }) => account);
  const [assetInfo, setAssetInfo] = useState('');

  const makeAssetAssessment = useCallback(() => {
    const asset = parseInt(assets.split('.')[0]);
    const payment = parseInt(payments.split('.')[0]);

    let assetResult = '';

    if (asset > payment) {
      assetResult = '#b71c1c';
    } else if (assets < payment) {
      assetResult = '#1976d2';
    } else if (asset === payment) {
      assetResult = '#212121';
    }
    setAssetInfo(assetResult);
  }, [assets, payments]);

  useEffect(() => {
    makeAssetAssessment(assets, payments);
  }, [makeAssetAssessment, assets, payments]);

  return (
    <AccountListContainer>
      <p>{brokerList[broker_id] ?? '-'}</p>
      <AccountInfo onClick={() => navigate(`/accounts/${id}`)}>
        {makeAccountNumberMasking(number) ?? '-'}
      </AccountInfo>
      <p onClick={() => navigate(`/users/${user_id}`)}>{userIdHashObj[user_id] ?? '-'} </p>
      <p>{accountStatusHashObj[status] ?? '-'}</p>
      <p>{name}</p>
      <p style={{ color: assetInfo }}>{makeThousandSeparator(assets)}</p>
      <p>{makeThousandSeparator(payments)}</p>
      <p>{is_active ? '활성화' : '비활성화'}</p>
      <p>{created_at.split('T')[0]}</p>
    </AccountListContainer>
  );
};

export default ListItem;

const AccountListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1.5rem 2rem;
  background-color: #efebe9;
  margin-bottom: 1.4rem;
  > * {
    flex-basis: 110px;
    width: 110px;
    text-align: center;
    font-size: 14px;
  }
`;

const AccountInfo = styled.p`
  color: #607d8b;
`;
