import React from 'react';
import { LayoutFlexProps } from './layoutFlex.interface';
import './style.scss';

export const LayoutFlex: React.FC<LayoutFlexProps> = (props) => {
  return <div className={`LayoutFlex LayoutFlex_${props.flex}`}>{props.children}</div>;
};
