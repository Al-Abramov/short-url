import React from 'react';
import { ControlsProps } from './controls.interface';
import './style.scss';

export const Controls: React.FC<ControlsProps> = (props) => {
  return (
    <div className="Controls">
      {props.token ? (
        <button onClick={props.logout}>Log out</button>
      ) : (
        <>
          <button onClick={props.onReg}>Sign in</button>
          <button onClick={props.onAuth}>Log in</button>
        </>
      )}
    </div>
  );
};
