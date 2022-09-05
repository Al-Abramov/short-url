import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthorizationForm } from '../../components/forms/authorization';
import { LayoutFlex } from '../../components/layout-flex';
import { Loader } from '../../components/loader';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchAuthorize } from '../../store/user-slice';
import { UserData } from '../../store/user-slice/user-reducer.interface';

export const Authorization = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  const onAuth = useCallback(
    async (data: UserData) => {
      try {
        await dispatch(fetchAuthorize(data)).unwrap();
        navigate('/main');
      } catch (error) {
        throw error;
      }
    },
    [dispatch, navigate]
  );

  return (
    <LayoutFlex flex="start">
      <Loader isLoading={isLoading} />
      <AuthorizationForm error={error} onAuth={onAuth} />
    </LayoutFlex>
  );
};
