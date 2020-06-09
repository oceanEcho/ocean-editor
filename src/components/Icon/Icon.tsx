import React, { FunctionComponent } from 'react';

import file from './assets/file.png'
import folder from './assets/folder.png'
import save from './assets/save.png'
import edit from './assets/edit.png'
import photoCamera from './assets/photo-camera.png'
import user from './assets/user.png'
import settings from './assets/settings.png'
import notebook from './assets/notebook.png'
import plus from './assets/plus.png'

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
};

export interface IIconProps {
  type: keyof typeof iconMap;
  alt?: string;
  className?: string;
  color?: string;
}

export const Icon: FunctionComponent<IIconProps> = ({
  type,
  alt = '',
  className = '',
  ...props
}) => {
  return <img className={className} src={iconMap[type]} alt={alt} {...props}></img>
};
