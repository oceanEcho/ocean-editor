import React, { FunctionComponent, ReactNode } from 'react';

import styles from './Main.module.scss';

export interface IMainProps {
  className?: string;
  children?: ReactNode | ReactNode[];
}

export const Main: FunctionComponent<IMainProps> = ({className = '', children}) => {
  return <main className={styles.content}>
    {children}
  </main>
}