import { ISubject } from '../../models/subject';
import { IDocument } from '../../models/document';
import { GET_SUBJECT_SUCCESS, ISubjectActions, GET_SUBJECT_DOCUMENT_LIST_SUCCESS } from './actions';

export interface ISubjectState {
  entry: ISubject;
  documentList: IDocument[];
}

export const subjectInitialState: ISubjectState = {
  entry: {
    _id: '',
    name: '',
    authorId: '',
    createdAt: 0,
    documentCount: 0,
  },
  documentList: [],
};

export const subjectSelector = (state: { subject: ISubjectState }) => state.subject;

export const subject = (state = subjectInitialState, action: ISubjectActions) => {
  switch (action.type) {
    case GET_SUBJECT_SUCCESS: {
      const { data: entry } = action;

      return {
        ...state,
        entry,
      };
    }

    case GET_SUBJECT_DOCUMENT_LIST_SUCCESS: {
      const { data: documentList } = action;

      return {
        ...state,
        documentList,
      };
    }

    default:
      return state;
  }
};
