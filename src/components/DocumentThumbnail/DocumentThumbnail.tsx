import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './DocumentThumbnail.module.scss';

import { IDocument } from '../../models/document';
import { Row, Col } from '../Row';
import { Icon } from '../Icon';

export interface IDocumentThumbnailProps {
  className?: string;
  document: IDocument;
  onClick?: () => void;
  onDeleteClick?: () => void;
}

export const DocumentThumbnail: FunctionComponent<IDocumentThumbnailProps> = ({
  className = '',
  document,
  onClick,
  onDeleteClick,
}) => {
  const { name, updatedAt } = document;

  const rootClassName = cn(styles.root, { [styles.clickable]: !!onClick }, className);

  const nameClassName = cn(styles.name, { [styles.underlineName]: !!onClick });

  return (
    <Row fullwidth justify="space-between" className={rootClassName}>
      <Col col={11} onClick={onClick}>
        <div className={nameClassName}>{name}</div>
        <div className={styles.updatedAt}>{`Обновлён ${new Date(updatedAt).toLocaleString()}`}</div>
      </Col>
      <Col col={1} align="flex-end" justify="center">
        <Icon type="trash" size="small" onClick={onDeleteClick} />
      </Col>
    </Row>
  );
};
