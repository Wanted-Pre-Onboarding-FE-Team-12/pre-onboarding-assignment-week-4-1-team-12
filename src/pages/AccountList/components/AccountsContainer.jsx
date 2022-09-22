import { fetchAccountList } from '@store/modules/accountSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const AccountsContainer = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchAccountList())
    })
    return (
        <div>
            AccountsCaontainer
        </div>
    );
};

export default AccountsContainer;