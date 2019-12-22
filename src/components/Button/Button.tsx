import React, { FunctionComponent, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

export interface IButtonProps {
  className?: string;
  children: ReactNode | ReactNode[];
  onClick?: () => void;
}

export const Button: FunctionComponent<IButtonProps> = ({ className = '', children, onClick }) => {
  const rootClassName = cn(styles.root, className);
  return (
    <button className={rootClassName} onClick={onClick}>
      {children}
    </button>
  );
};
