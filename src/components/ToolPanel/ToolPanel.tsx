import React, { FunctionComponent, ReactNode } from "react";
import cn from 'classnames';

import styles from "./ToolPanel.module.scss";

export interface IToolPanelProps {
  className?: string;
  children?: ReactNode;
  position: 'left' | 'right';
}

export const ToolPanel: FunctionComponent<IToolPanelProps> = ({
  className = '',
  children,
  position
}) => {
  const rootClassName = cn(styles.root, styles[position], className)
  return <div className={rootClassName}>{children}</div>;
};
