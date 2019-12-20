import React, { FunctionComponent, StyleHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Row.module.scss';

interface Props {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  className?: string;
  style?: StyleHTMLAttributes<HTMLDivElement>;
  fullwidth?: boolean;
  children: ReactNode;
}

export const Row: FunctionComponent<Props> = ({
  justify = 'flex-start',
  children,
  className = '',
  fullwidth = false,
}) => {
  const style = { justifyContent: justify };

  const rowClassName = cn(styles.row, className, { [styles.fullwidth]: fullwidth });

  return (
    <div className={rowClassName} style={style}>
      {children}
    </div>
  );
};
