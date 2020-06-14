import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './NoteThumbnail.module.scss';

import { INote } from '../../models/note';
import { Icon } from '../Icon';

export interface INoteThumbnailProps {
  className?: string;
  note: INote;
  onDelete?: () => void;
  onEdit?: () => void;
}

export const NoteThumbnail: FunctionComponent<INoteThumbnailProps> = ({ className = '', note, onDelete, onEdit }) => {
  const { name, content } = note;

  const rootClassName = cn(styles.root, className);

  return (
    <div className={rootClassName}>
      <div className={styles.header}>
        <span>{name}</span>
        <div className={styles.controls}>
          <Icon type="edit" size="small" onClick={onEdit} />
          <Icon type="trash" size="small" onClick={onDelete} />
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
};
