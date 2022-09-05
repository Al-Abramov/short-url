import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from '../../utils/cookie';
import { Navigation } from '../navigation';
import { Controls } from './controls';
import './style.scss';

export const Header = () => {
  const navigate = useNavigate();

  const onReg = () => {
    navigate('/registration');
  };

  const onAuth = () => {
    navigate('/authorize');
  };

  const logout = () => {
    setCookie('token', '');
    navigate('/');
  };

  const token = getCookie('token') as string;

  return (
    <header className="header">
      <Navigation token={token} />
      <Controls token={token} logout={logout} onAuth={onAuth} onReg={onReg} />
    </header>
  );
};
