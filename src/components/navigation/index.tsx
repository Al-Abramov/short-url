import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationProps } from './navigation.interface';
import './style.scss';

export const Navigation: React.FC<NavigationProps> = ({ token }) => {
  return (
    <nav>
      <ul className="nav-container">
        <li>
          <Link to="/">Welcome</Link>
        </li>
        {token && (
          <li>
            <Link to="main">Main</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
