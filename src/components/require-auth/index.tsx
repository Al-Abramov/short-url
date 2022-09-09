import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';
import { Loader } from '../loader';
import { IRequireAuth } from './Require-auth.interface';

export const RequireAuth = ({ children }: IRequireAuth) => {
  const token = getCookie('token');
  const navigate = useNavigate();

  const checkAuth = () => {
    if (!token) navigate('/');
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return token ? children : <Loader isLoading={true} />;
};
