import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './Logo.module.scss';
import { Icon } from '../Icon';

export interface ILogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo: FunctionComponent<ILogoProps> = ({ className, onClick }) => {
  const rootClassName = cn(styles.root, className);

  return (
    <div className={rootClassName} onClick={onClick}>
      <Icon className={styles.icon} type="notebook" />
      <h1 className={styles.text}>Studier</h1>
    </div>
  );
};
