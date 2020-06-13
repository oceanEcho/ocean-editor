import React, { FunctionComponent } from 'react';
import { ISubject } from '../../models/subject';
import { Subject } from '../Subject/Subject';

export interface ISubjectListProps {
  subjects: ISubject[];
}

export const SubjectList: FunctionComponent<ISubjectListProps> = ({ subjects }) => {
  return (
    <>
      {subjects.map((subject) => (
        <Subject key={subject._id} subject={subject} />
      ))}
    </>
  );
};
