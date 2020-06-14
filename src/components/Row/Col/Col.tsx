import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './Col.module.scss';

import { StyleHTMLAttributes, ReactNode } from 'react';

export interface IColProps {
  col?: number;
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'center' | 'flex-end';
  className?: string;
  style?: StyleHTMLAttributes<HTMLDivElement>;
  children: ReactNode;
  onClick?: () => void;
}

export const Col: FunctionComponent<IColProps> = ({
  col = 12,
  align = 'stretch',
  justify = 'flex-start',
  children,
  className,
  style = {},
  onClick,
}) => {
  const colStyles = {
    alignItems: align,
    justifyContent: justify,
    width: `${(100 / 12) * col}%`,
    ...style,
  };

  return (
    <div className={cn(styles.col, { [styles.clickable]: !!onClick }, className)} style={colStyles} onClick={onClick}>
      {children}
    </div>
  );
};
