import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import styles from './Subject.module.scss';

import { ISubject } from '../../models/subject';
import { Row } from '../Row';

export interface ISubjectProps {
  className?: string;
  subject: ISubject;
}

export const Subject: FunctionComponent<ISubjectProps> = ({ className = '', subject }) => {
  const { name } = subject;

  const rootClassName = cn(styles.root, className);

  return (
    <Row fullwidth justify="space-between" className={rootClassName}>
      <span className={styles.subjectName}>{name}</span>
    </Row>
  );
};
