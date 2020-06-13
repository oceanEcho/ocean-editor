import React, { FunctionComponent, ReactNode } from 'react';
import cn from 'classnames';

import styles from './PanelHeader.module.scss';

export interface IPanelHeaderProps {
  className?: string;
  children?: ReactNode | ReactNode[];
  underline?: boolean;
  justify?: 'rigth' | 'center' | 'left';
}

export const PanelHeader: FunctionComponent<IPanelHeaderProps> = ({
  className = '',
  children,
  underline = false,
  justify = 'left',
}) => {
  const style = { justifyContent: justify };

  const rootClassName = cn(styles.root, { [styles.underline]: underline }, className);

  return (
    <div className={rootClassName} style={style}>
      {children}
    </div>
  );
};
