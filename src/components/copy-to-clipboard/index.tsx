import React, { useState } from 'react';
import { ClipBoardProps } from './clipboard.interface';
import './style.scss';

export const CopyToClipboard: React.FC<ClipBoardProps> = ({ children, text }) => {
  const [copy, setCopy] = useState(false);

  const setClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopy(true);

    setTimeout(() => setCopy(false), 1000);
  };

  return (
    <div className="CopyToClipboard" onClick={() => setClipboard(text)}>
      {children}
      {copy && <span className="CopyToClipboard__text">Copied!</span>}
    </div>
  );
};
