import React, { FunctionComponent, ReactNode } from "react";
import cn from "classnames";

import styles from "./Header.module.scss";

export interface IHeaderProps {
  className?: string;
  children?: ReactNode | ReactNode[];
}

export const Header: FunctionComponent<IHeaderProps> = ({
  className = "",
  children
}) => {
  const rootClassName = cn(styles.root, className);

  return <header className={rootClassName}>
    <div className={styles.content}>
      {children}
    </div>
  </header>;
};
