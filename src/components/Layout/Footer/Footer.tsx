import React, { FunctionComponent, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Footer.module.scss';

export interface IFooterProps {
  className?: string;
  children?: ReactNode | ReactNode[];
}

export const Footer: FunctionComponent<IFooterProps> = ({ className = '', children }) => {
  const rootClassName = cn(styles.root, className);
  const defaultText = '© 2019 Ivan Zaitsev | About | Contact';

  return <footer className={rootClassName}>{children ? children : defaultText}</footer>;
};
