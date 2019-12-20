import React, { FunctionComponent, ReactNode } from 'react';

import styles from './Content.module.scss';

export interface IContentProps {
  className?: string;
  children?: ReactNode | ReactNode[];
}

export const Content: FunctionComponent<IContentProps> = ({ className = '', children }) => {
  return <div className={styles.root}>
    {children}
  </div>
}