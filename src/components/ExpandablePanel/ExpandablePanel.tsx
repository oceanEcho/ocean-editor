import React, { FunctionComponent, ReactNode, useState, useCallback, useEffect } from 'react';
import cn from 'classnames';
import AnimateHeight from 'react-animate-height';

import styles from './ExpandablePanel.module.scss';

import { Panel } from '../Panel';

export interface IExpandablePanelProps {
  className?: string;
  children: ReactNode | ReactNode[];
  title: ReactNode | ReactNode[];
  hasBeenOpened?: boolean;
  hasContent?: boolean;
}

export const ExpandablePanel: FunctionComponent<IExpandablePanelProps> = ({
  className = '',
  children,
  title,
  hasBeenOpened = false,
  hasContent = true,
}) => {
  const [isOpened, setOpened] = useState(hasBeenOpened);

  useEffect(() => {
    setOpened(hasBeenOpened);
    setHeight(hasBeenOpened ? 'auto' : 0);
  }, [hasBeenOpened]);

  const [height, setHeight] = useState(isOpened ? 'auto' : 0);

  const onOpen = useCallback(() => {
    if (!hasContent) {
      return;
    }
    setHeight('auto');
    setOpened(true);
  }, [hasContent]);

  const onClose = useCallback(() => {
    setHeight(0);
    setOpened(false);
  }, []);

  const arrowStyles = cn(styles.openArrow, { [styles.disabledArrow]: !hasContent });

  return (
    <Panel className={cn(styles.root, className)}>
      <div className={styles.header}>
        <div>{title}</div>
        <div className={arrowStyles} onClick={isOpened ? onClose : onOpen}>
          {isOpened ? '▲' : '▼'}
        </div>
      </div>
      <AnimateHeight duration={500} height={height}>
        <div className={styles.content}>{children}</div>
      </AnimateHeight>
    </Panel>
  );
};
