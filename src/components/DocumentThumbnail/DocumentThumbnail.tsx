import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './DocumentThumbnail.module.scss';

import { IDocument } from '../../models/document';
import { Row, Col } from '../Row';

export interface IDocumentThumbnailProps {
  className?: string;
  document: IDocument;
  onClick?: () => void;
}

export const DocumentThumbnail: FunctionComponent<IDocumentThumbnailProps> = ({
  className = '',
  document,
  onClick,
}) => {
  const { name, updatedAt } = document;

  const rootClassName = cn(styles.root, { [styles.clickable]: !!onClick }, className);

  const nameClassName = cn(styles.name, { [styles.underlineName]: !!onClick });

  return (
    <Row fullwidth justify="space-between" className={rootClassName} onClick={onClick}>
      <Col col={12}>
        <div className={nameClassName}>{name}</div>
        <div className={styles.updatedAt}>{`Обновлён ${new Date(updatedAt).toLocaleString()}`}</div>
      </Col>
    </Row>
  );
};
