import React from 'react';
import { ShortLinkProps } from './short-link.interface';
import './style.scss';

export const ShortLink: React.FC<ShortLinkProps> = (props) => {
  return (
    <div className="ShortLink">
      <span>Short link:</span>
      <span>{props.short}</span>
    </div>
  );
};
