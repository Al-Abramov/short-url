import React from 'react';
import { FlexContainerProps } from './flex-container.interface';
import './style.scss';

export const FlexContainer: React.FC<FlexContainerProps> = (props) => {
  return (
    <div className={`FlexContainer FlexContainer_${props.location} FlexContainer_${props.flex}`}>
      {props.children}
    </div>
  );
};
