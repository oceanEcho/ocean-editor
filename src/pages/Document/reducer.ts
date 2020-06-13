import { IDocument } from '../../models/document';
import { CREATE_DOCUMENT_SUCCESS, IHomeActions } from '../Home/actions';
import { GET_DOCUMENT_SUCCESS, IDocumentActions, CLOSE_DOCUMENT } from './actions';

export interface IDocumentState {
  entry: IDocument;
}

export const documentInitialState: IDocumentState = {
  entry: {
    _id: ' ',
    name: ' ',
    subjectId: ' ',
    subjectName: '',
    content: undefined,
    createdAt: 0,
    updatedAt: 0,
    authorId: '',
    authorName: '',
  },
};

export const documentSelector = (state: { document: IDocumentState }) => state.document;

export const document = (state = documentInitialState, action: IDocumentActions | IHomeActions) => {
  switch (action.type) {
    case CREATE_DOCUMENT_SUCCESS: {
      const { data: entry } = action;

      return {
        ...state,
        entry,
      };
    }

    case GET_DOCUMENT_SUCCESS: {
      const { data: entry } = action;

      return {
        ...state,
        entry,
      };
    }

    case CLOSE_DOCUMENT: {
      return {
        ...documentInitialState,
      };
    }

    default:
      return state;
  }
};
