import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.scss';

export const Main = () => {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
};
