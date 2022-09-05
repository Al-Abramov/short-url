import React from 'react';
import { LoaderProps } from './loader.interface';
import './style.scss';

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="fetching">
          <span className="fetching__title"></span>
          <div className="fetching__spinner"></div>
        </div>
      )}
    </>
  );
};
