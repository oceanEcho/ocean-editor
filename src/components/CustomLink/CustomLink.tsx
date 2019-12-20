import React, { FunctionComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './CustomLink.module.scss';

export interface ICustomLinkProps {
  className?: string;
  to: string;
  style?: 'link' | 'none';
  children: ReactNode;
  disabled?: boolean;
}

export const CustomLink: FunctionComponent<ICustomLinkProps> = ({ className = '', to, style = 'none', children, disabled = false }) => {
  const rootClassName = cn(styles.root, styles[style], { [styles.disabled]: disabled }, className)
  return <Link className={rootClassName} to={disabled ? '' : to}>{children}</Link>
}