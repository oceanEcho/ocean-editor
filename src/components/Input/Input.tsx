import React, { FunctionComponent, useCallback } from 'react';

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

  return <input className={className} placeholder={placeholder} value={value} onChange={handleChange} />;
};
