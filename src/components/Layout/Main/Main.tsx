import React, { FunctionComponent, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Main.module.scss';

export interface IMainProps {
  className?: string;
  children?: ReactNode | ReactNode[];
}

export const Main: FunctionComponent<IMainProps> = ({className = '', children}) => {
  const rootClassName = cn(styles.content, className);
  return <main className={rootClassName}>
    {children}
  </main>
}