import React, { FunctionComponent, ReactNode, useCallback, SyntheticEvent } from 'react';

import styles from './Modal.module.scss';

export interface IModalProps {
  isOpen: boolean;
  children?: ReactNode | ReactNode[];
  onClose: () => void;
}

export const Modal: FunctionComponent<IModalProps> = ({ isOpen = false, children, onClose }) => {
  const handleClose = useCallback(
    (event: SyntheticEvent) => {
      if (onClose) {
        onClose();
      }
    },
    [onClose]
  );

  return isOpen ? (
    <>
      <div className={styles.overlay} onClick={handleClose}></div>
      <div className={styles.root}>{children}</div>
    </>
  ) : null;
};
