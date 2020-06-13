import React, { FunctionComponent, ReactNode, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

export interface IButtonProps extends ButtonHTMLAttributes<any> {
  className?: string;
  children: ReactNode | ReactNode[];
  onClick?: () => void;
}

export const Button: FunctionComponent<IButtonProps> = ({ className = '', children, onClick, ...props }) => {
  const rootClassName = cn(styles.root, className);
  return (
    <button {...props} className={rootClassName} onClick={onClick}>
      {children}
    </button>
  );
};
