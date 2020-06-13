import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './Subject.module.scss';

import { ISubject } from '../../models/subject';
import { Row } from '../Row';

export interface ISubjectProps {
  className?: string;
  subject: ISubject;
  onClick?: () => void;
}

export const Subject: FunctionComponent<ISubjectProps> = ({ className = '', subject, onClick }) => {
  const { name } = subject;

  const rootClassName = cn(styles.root, { [styles.clickable]: !!onClick }, className);

  return (
    <Row fullwidth justify="space-between" className={rootClassName}>
      <span className={styles.subjectName}>{name}</span>
    </Row>
  );
};
