import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './Input.module.scss';

export interface IInputProps {
  className?: string;
}

export const Input: FunctionComponent<IInputProps> = ({ className = '' }) => {
  const rootClassName = cn(styles.root, className);
  return <input className={rootClassName}></input>;
};
