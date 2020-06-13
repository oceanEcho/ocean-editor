import React, { FunctionComponent, ReactNode } from 'react';
import cn from 'classnames';

import styles from './PanelHeader.module.scss';

export interface IPanelHeaderProps {
  className?: string;
  children?: ReactNode | ReactNode[];
}

export const PanelHeader: FunctionComponent<IPanelHeaderProps> = ({ className = '', children }) => {
  const rootClassName = cn(styles.root, className);

  return <div className={rootClassName}>{children}</div>;
};
