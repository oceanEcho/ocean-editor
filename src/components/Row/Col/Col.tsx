import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './Col.module.scss';

import { StyleHTMLAttributes, ReactNode } from 'react';

export interface IColProps {
  col?: number;
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  className?: string;
  style?: StyleHTMLAttributes<HTMLDivElement>;
  children: ReactNode;
}

export const Col: FunctionComponent<IColProps> = ({
  col = 12,
  align = 'stretch',
  children,
  className,
  style = {},
}) => {
  const colStyles = {
    alignItems: align,
    width: `${(100 / 12) * col}%`,
    ...style,
  };

  return (
    <div className={cn(styles.col, className)} style={colStyles}>
      {children}
    </div>
  );
};
