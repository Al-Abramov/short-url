import React from 'react';
import { CopyToClipboard } from '../copy-to-clipboard';
import { ShortLinkProps } from './short-link.interface';
import './style.scss';

export const ShortLink: React.FC<ShortLinkProps> = ({ short }) => {
  return (
    <div className="ShortLink">
      <span className="ShortLink__title">Short link:</span>
      <CopyToClipboard text={short}>
        <span className="ShortLink__content">{short}</span>
      </CopyToClipboard>
    </div>
  );
};
