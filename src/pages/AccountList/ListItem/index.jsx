import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { makeThousandSeparator, makeAccountNumberMasking } from '@utils/account';
import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';

/**
 * 총 자산 금액 계산 후 보여지는 조건
 * - 수익률(평가 금액)이 플러스인 계좌의 총자산 금액은 빨간색
 * - 마이너스일 경우 파란색
 * - 원금(입금 금액)과 동일한 경우 검정색으로 보여줘야 한다.
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
      <p>{is_active ? 'O' : 'X'}</p>
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
    flex-basis: 100px;
    width: 100px;
    text-align: center;
    font-size: 14px;
  }
`;

const AccountInfo = styled.p`
  color: #607d8b;
`;
