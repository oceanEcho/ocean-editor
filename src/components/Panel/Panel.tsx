import React, { FunctionComponent, ReactNode } from "react";
import cn from 'classnames';

import styles from "./Panel.module.scss";

export interface IPanelProps {
  className?: string;
  children?: ReactNode;
}

export const Panel: FunctionComponent<IPanelProps> = ({
  className = '',
  children,
}) => {
  const rootClassName = cn(styles.root, className)
  return <div className={rootClassName}>{children}</div>;
};
