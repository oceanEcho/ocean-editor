import React, { FunctionComponent, ReactNode } from 'react';
import cn from 'classnames';

import styles from './PanelFooter.module.scss';

export interface IPanelFooterProps {
  className?: string;
  children?: ReactNode | ReactNode[];
}

export const PanelFooter: FunctionComponent<IPanelFooterProps> = ({ className = '', children }) => {
  const rootClassName = cn(styles.root, className);

  return <div className={rootClassName}>{children}</div>;
};
