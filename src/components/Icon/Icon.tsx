import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './Icon.module.scss';

import file from './assets/file.png';
import folder from './assets/folder.png';
import save from './assets/save.png';
import edit from './assets/edit.png';
import photoCamera from './assets/photo-camera.png';
import user from './assets/user.png';
import settings from './assets/settings.png';
import notebook from './assets/notebook.png';
import plus from './assets/plus.png';
import trash from './assets/trash.png';

export const iconMap = {
  file,
  folder,
  save,
  edit,
  photoCamera,
  user,
  settings,
  notebook,
  plus,
  trash,
};

export interface IIconProps {
  type: keyof typeof iconMap;
  alt?: string;
  className?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Icon: FunctionComponent<IIconProps> = ({
  type,
  alt = '',
  className = '',
  size = 'medium',
  onClick,
  ...props
}) => {
  let iconSize;

  if (size === 'small') {
    iconSize = {
      width: '16px',
      height: '16px',
    };
  } else if (size === 'medium') {
    iconSize = {
      width: '32px',
      height: '32px',
    };
  } else if (size === 'large') {
    iconSize = {
      width: '64px',
      height: '64px',
    };
  }

  const iconClassName = cn(styles.root, { [styles.clickable]: !!onClick }, className);

  return (
    <img className={iconClassName} src={iconMap[type]} alt={alt} style={iconSize} onClick={onClick} {...props}></img>
  );
};
