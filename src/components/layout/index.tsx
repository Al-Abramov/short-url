import React from 'react';
import { Header } from '../header';
import { Main } from '../main';
import './style.scss';

export const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <Main />
    </div>
  );
};
