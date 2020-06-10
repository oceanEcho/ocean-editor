import React, { FunctionComponent, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Panel.module.scss';

export interface IPanelProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const Panel: FunctionComponent<IPanelProps> = ({ className = '', children, onClick }) => {
  const rootClassName = cn(styles.root, { [styles.clickable]: !!onClick }, className);

  return (
    <div className={rootClassName} onClick={onClick}>
      {children}
    </div>
  );
};
