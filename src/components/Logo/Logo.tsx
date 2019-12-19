import React, { FunctionComponent } from 'react';

import styles from './Logo.module.scss';
import { Icon } from '../Icon';

export interface ILogoProps {
  onClick?: () => void;
}

export const Logo: FunctionComponent<ILogoProps> = ({ onClick }) => {
  return (
    <div className={styles.root} onClick={onClick}>
      <Icon className={styles.icon} type="notebook" />
      <h1 className={styles.text}>My awesome editor</h1>
    </div>
  );
};
