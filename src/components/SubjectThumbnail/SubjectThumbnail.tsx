import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './SubjectThumbnail.module.scss';

import { ISubject } from '../../models/subject';
import { Row, Col } from '../Row';
import { Icon } from '../Icon';

export interface ISubjectThumbnailProps {
  className?: string;
  subject: ISubject;
  onClick?: () => void;
  onDeleteClick?: () => void;
}

export const SubjectThumbnail: FunctionComponent<ISubjectThumbnailProps> = ({
  className = '',
  subject,
  onClick,
  onDeleteClick,
}) => {
  const { name, documentCount } = subject;

  const rootClassName = cn(styles.root, { [styles.clickable]: !!onClick }, className);

  return (
    <Row fullwidth justify="space-between" className={rootClassName} onClick={onClick}>
      <span className={styles.subjectName}>{name}</span>
      {!!documentCount && <span>{`(Всего документов: ${documentCount})`}</span>}
      {!!onDeleteClick && !documentCount && (
        <Col col={1} align="flex-end" justify="center">
          <Icon type="trash" size="small" onClick={onDeleteClick} />
        </Col>
      )}
    </Row>
  );
};
