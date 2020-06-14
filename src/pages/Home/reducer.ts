import { AnyAction } from 'redux';

import { ISubject } from '../../models/subject';
import { GET_SUBJECT_LIST_SUCCESS, GET_DOCUMENT_LIST_SUCCESS, GET_NOTE_LIST_SUCCESS } from './actions';
import { IDocument } from '../../models/document';
import { INote } from '../../models/note';

export interface IHomeState {
  subjectlist: ISubject[];
  documentList: IDocument[];
  noteList: INote[];
}

export const homeInitialState: IHomeState = {
  subjectlist: [],
  documentList: [],
  noteList: [],
};

export const homeSelector = (state: { home: IHomeState }) => state.home;

export const home = (state = homeInitialState, action: AnyAction) => {
  switch (action.type) {
    case GET_SUBJECT_LIST_SUCCESS: {
      const { data: subjectlist } = action;

      return {
        ...state,
        subjectlist,
      };
    }

    case GET_DOCUMENT_LIST_SUCCESS: {
      const { data: documentList } = action;

      return {
        ...state,
        documentList,
      };
    }

    case GET_NOTE_LIST_SUCCESS: {
      const { data: noteList } = action;

      return {
        ...state,
        noteList,
      };
    }

    default:
      return state;
  }
};
