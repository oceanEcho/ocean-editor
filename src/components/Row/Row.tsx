import React, { FunctionComponent, StyleHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Row.module.scss';

interface Props {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  className?: string;
  style?: StyleHTMLAttributes<HTMLDivElement>;
  fullwidth?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export const Row: FunctionComponent<Props> = ({
  justify = 'flex-start',
  children,
  className = '',
  fullwidth = false,
  onClick,
}) => {
  const style = { justifyContent: justify };

  const rowClassName = cn(styles.row, { [styles.fullwidth]: fullwidth }, className);

  return (
    <div className={rowClassName} style={style} onClick={onClick}>
      {children}
    </div>
  );
};
