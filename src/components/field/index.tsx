import React from 'react';
import { FieldProps } from './field.interface';
import './style.scss';

export const Field: React.FC<FieldProps> = (props) => {
  return (
    <div className="Field">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <div className="Field__input">{props.children}</div>
      <div className="Field__error">{props.error}</div>
    </div>
  );
};
