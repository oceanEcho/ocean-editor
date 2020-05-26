import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './Input.module.scss';

export interface IInputProps {
  className?: string;
  placeholder?: string;
}

export const Input: FunctionComponent<IInputProps> = ({ className = '', placeholder }) => {
  const inputClassName = cn(styles.input, className);
  return <input className={inputClassName} placeholder={placeholder}></input>;
};
