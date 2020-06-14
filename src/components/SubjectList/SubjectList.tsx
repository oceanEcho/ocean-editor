import React, { FunctionComponent, Dispatch, useCallback } from 'react';
import { push } from 'connected-react-router';

import { ISubject } from '../../models/subject';
import { SubjectThumbnail } from '../SubjectThumbnail/SubjectThumbnail';
import { routes } from '../../App/routes';
import { deleteSubject } from '../../pages/Home/actions';

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

  const onSubjectDeleteClick = useCallback(
    (id: string) => {
      dispatch(deleteSubject(id));
    },
    [dispatch]
  );

  return (
    <>
      {subjects.map((subject) => {
        const { _id, documentCount } = subject;
        return (
          <SubjectThumbnail
            key={_id}
            subject={subject}
            onClick={documentCount ? () => onSubjectClick(_id) : undefined}
            onDeleteClick={() => onSubjectDeleteClick(_id)}
          />
        );
      })}
    </>
  );
};
