import React, { FunctionComponent, Dispatch, useCallback } from 'react';
import { push } from 'connected-react-router';

import { ISubject } from '../../models/subject';
import { Subject } from '../Subject/Subject';
import { routes } from '../../App/routes';

export interface ISubjectListProps {
  dispatch: Dispatch<any>;
  subjects: ISubject[];
}

export const SubjectList: FunctionComponent<ISubjectListProps> = ({ dispatch, subjects }) => {
  const onSubjectClick = useCallback(
    (id: string) => {
      dispatch(push(`${routes.SUBJECT.path}/${id}`));
    },
    [dispatch]
  );

  return (
    <>
      {subjects.map((subject) => (
        <Subject key={subject._id} subject={subject} onClick={() => onSubjectClick(subject._id)} />
      ))}
    </>
  );
};
