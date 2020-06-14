import React, { FunctionComponent, TextareaHTMLAttributes, useCallback } from 'react';
import cn from 'classnames';

import styles from './Textarea.module.scss';

export interface ITextareaProps extends TextareaHTMLAttributes<any> {
  className?: string;
  onValueChange?: (value: string) => void;
  value: string;
}

export const Textarea: FunctionComponent<ITextareaProps> = ({ className, onValueChange, value, ...props }) => {
  const handleChange = useCallback(
    (event: any) => {
      const {
        target: { value },
      } = event;
      if (onValueChange) {
        onValueChange(value);
      }
    },
    [onValueChange]
  );

  const rootclassName = cn(styles.root, className);

  return <textarea className={rootclassName} onChange={handleChange} value={value} rows={15}></textarea>;
};
