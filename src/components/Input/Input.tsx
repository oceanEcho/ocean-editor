import React, { FunctionComponent, useCallback, InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<any> {
  className?: string;
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const Input: FunctionComponent<IInputProps> = ({
  className = '',
  placeholder,
  value,
  onValueChange,
  ...props
}) => {
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

  return <input {...props} className={className} placeholder={placeholder} value={value} onChange={handleChange} />;
};
