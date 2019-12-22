import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './Template.module.scss';

export interface ITemplateProps {
  className?: string;
}

export const Template: FunctionComponent<ITemplateProps> = ({ className = '' }) => {
  const rootClassName = cn(styles.root, className);
  return <div className={rootClassName}></div>;
};
