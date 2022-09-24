import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  makeThousandSeparator,
  makeAccountNumberMasking,
  makeDataFormatTheYearMonthDay,
} from '@utils/account';
import styled from 'styled-components';

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
      <AccountInfo onClick={() => navigate(`/accounts/${id}/${user_id}`)}>
        {makeAccountNumberMasking(number) ?? '-'}
      </AccountInfo>
      <p onClick={() => navigate(`/users/${user_id}`)}>
        {userIdHashObj[user_id] ?? '고객명 확인 필요'}
      </p>
      <p>{accountStatusHashObj[status] ?? '-'}</p>
      <p>{name}</p>
      <p style={{ color: assetInfo }}>{makeThousandSeparator(assets)}</p>
      <p>{makeThousandSeparator(payments)}</p>
      <p>{is_active ? '활성화' : '비활성화'}</p>
      <p>{makeDataFormatTheYearMonthDay(created_at)}</p>
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
  height: 70px;
  padding: 1.5rem 2rem;
  background-color: #ede7f6;
  margin-bottom: 1.4rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
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
