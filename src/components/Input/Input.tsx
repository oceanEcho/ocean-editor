import React, { FunctionComponent, useCallback } from 'react';
import cn from 'classnames';

import styles from './Input.module.scss';

export interface IInputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: FunctionComponent<IInputProps> = ({ className = '', placeholder, value, onChange }) => {
  const handleChange = useCallback(
    (event: any) => {
      const {
        target: { value },
      } = event;
      if (onChange) {
        onChange(value);
      }
    },
    [onChange]
  );

  const inputClassName = cn(styles.input, className);

  return <input className={inputClassName} placeholder={placeholder} value={value} onChange={handleChange}></input>;
};
