import React, { FunctionComponent } from 'react';
import ReactDropdown, { Option, Group } from 'react-dropdown';
import 'react-dropdown/style.css';

import styles from './Dropdown.module.scss';

export interface IDropdownProps {
  options: (Group | Option | string)[];
  baseClassName?: string;
  className?: string;
  controlClassName?: string;
  placeholderClassName?: string;
  menuClassName?: string;
  arrowClassName?: string;
  disabled?: boolean;
  arrowClosed?: React.ReactNode;
  arrowOpen?: React.ReactNode;
  onChange?: (arg: Option) => void;
  onFocus?: (arg: boolean) => void;
  value?: Option | string;
  placeholder?: String;
}

export const Dropdown: FunctionComponent<IDropdownProps> = ({ ...props }) => {
  return (
    <ReactDropdown
      {...props}
      className={styles.dropdownRoot}
      controlClassName={styles.dropdownControl}
      menuClassName={styles.dropdownMenu}
    />
  );
};
