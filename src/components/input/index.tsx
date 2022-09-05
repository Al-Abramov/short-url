import React from 'react';
import { InputProps } from './Input.Interface';
import './style.scss';

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      className="Input"
      id={props.id}
      type={props.type}
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
};
