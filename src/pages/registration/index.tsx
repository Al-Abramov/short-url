import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RegistrationForm } from '../../components/forms/registration';
import { LayoutFlex } from '../../components/layout-flex';
import { Loader } from '../../components/loader';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchRegistration } from '../../store/user-slice';
import { UserData } from '../../store/user-slice/user-reducer.interface';
import './style.scss';

export const Registration = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  const onRegister = (data: UserData) => {
    dispatch(fetchRegistration(data));
    navigate('/authorize');
  };

  return (
    <LayoutFlex flex="start">
      <Loader isLoading={isLoading} />
      <RegistrationForm error={error} onRegister={onRegister} />
    </LayoutFlex>
  );
};
