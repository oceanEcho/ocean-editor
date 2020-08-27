import { AnyAction, Action } from 'redux';
import { push } from 'connected-react-router';
import { takeEvery, put } from 'redux-saga/effects';
import { store } from 'react-notifications-component';

import { createRequestAction } from '../../utils/request';
import {
  SUBJECT_LIST_ENDPOINT,
  DOCUMENT_ENDPOINT,
  SUBJECT_ENDPOINT,
  DOCUMENT_LIST_ENDPOINT,
  NOTE_LIST_ENDPOINT,
  NOTE_ENDPOINT,
  NOTE_ITEM_ENDPOINT,
  SUBJECT_ITEM_ENDPOINT,
  DOCUMENT_ITEM_CONTENT_ENDPOINT,
} from '../../api/endpoints';
import { routes } from '../../App/routes';

export const GET_DOCUMENT_LIST = 'GET_DOCUMENT_LIST';

export interface IGetDocumentList extends AnyAction {
  type: typeof GET_DOCUMENT_LIST;
  request: {
    method: string;
    url: string;
  };
}

export const getDocumentList = (count?: number): IGetDocumentList => {
  return {
    type: GET_DOCUMENT_LIST,
    request: {
      method: 'GET',
      url: `${DOCUMENT_LIST_ENDPOINT}?count=${count}`,
    },
  };
};

export const GET_DOCUMENT_LIST_SUCCESS = 'GET_DOCUMENT_LIST_SUCCESS';

export interface IGetDocumentListSuccess extends AnyAction {
  type: typeof GET_DOCUMENT_LIST_SUCCESS;
  data: any;
}

export const getDocumentListSuccess = (data: any): IGetDocumentListSuccess => {
  return {
    type: GET_DOCUMENT_LIST_SUCCESS,
    data,
  };
};

export const GET_DOCUMENT_LIST_ERROR = 'GET_DOCUMENT_LIST_ERROR';

export interface IGetDocumentListError extends AnyAction {
  type: typeof GET_DOCUMENT_LIST_ERROR;
  error: any;
}

export const getDocumentListError = (error: any): IGetDocumentListError => {
  return {
    type: GET_DOCUMENT_LIST_ERROR,
    error,
  };
};

export const CREATE_SUBJECT = 'CREATE_SUBJECT';

export interface ICreateSubject extends AnyAction {
  type: typeof CREATE_SUBJECT;
  request: {
    url: string;
    method: string;
    headers: any;
    data: any;
  };
}

export const createSubject = (data: object): ICreateSubject => {
  const dataToRequest = JSON.stringify(data);

  return {
    type: CREATE_SUBJECT,
    request: {
      url: SUBJECT_ENDPOINT,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: dataToRequest,
    },
  };
};

export const CREATE_SUBJECT_SUCCESS = 'CREATE_SUBJECT_SUCCESS';

export interface ICreateSubjectSuccess extends AnyAction {
  type: typeof CREATE_SUBJECT_SUCCESS;
  data: any;
}

export const DELETE_SUBJECT = 'DELETE_SUBJECT';

export interface IDeleteSubject extends AnyAction {
  type: typeof DELETE_SUBJECT;
  request: {
    url: string;
    method: string;
  };
}

export const deleteSubject = (id: string): IDeleteSubject => {
  return {
    type: DELETE_SUBJECT,
    request: {
      url: SUBJECT_ITEM_ENDPOINT(id),
      method: 'DELETE',
    },
  };
};

export const DELETE_SUBJECT_SUCCESS = 'DELETE_SUBJECT_SUCCESS';

export const GET_SUBJECT_LIST = 'GET_SUBJECT_LIST';

export interface IGetSubjectList extends AnyAction {
  type: typeof GET_SUBJECT_LIST;
  request: {
    method: string;
    url: string;
  };
}

export const getSubjectList = (): IGetSubjectList => {
  return {
    type: GET_SUBJECT_LIST,
    request: {
      method: 'GET',
      url: SUBJECT_LIST_ENDPOINT,
    },
  };
};

export const GET_SUBJECT_LIST_SUCCESS = 'GET_SUBJECT_LIST_SUCCESS';

export interface IGetSubjectListSuccess extends AnyAction {
  type: typeof GET_SUBJECT_LIST_SUCCESS;
  data: any;
}

export const getSubjectListSuccess = (data: any): IGetSubjectListSuccess => {
  return {
    type: GET_SUBJECT_LIST_SUCCESS,
    data,
  };
};

export const GET_SUBJECT_LIST_ERROR = 'GET_SUBJECT_LIST_ERROR';

export interface IGetSubjectListError extends AnyAction {
  type: typeof GET_SUBJECT_LIST_ERROR;
  error: any;
}

export const getSubjectListError = (error: any): IGetSubjectListError => {
  return {
    type: GET_SUBJECT_LIST_ERROR,
    error,
  };
};

export const CREATE_DOCUMENT = 'CREATE_DOCUMENT';

export interface ICreateDocument extends AnyAction {
  type: typeof CREATE_DOCUMENT;
  request: {
    url: string;
    method: string;
    headers: any;
    data: any;
  };
  meta: {
    content: string;
  };
}

export const createDocument = (data: object, content: string): ICreateDocument => {
  const dataToRequest = JSON.stringify(data);

  return {
    type: CREATE_DOCUMENT,
    request: {
      url: DOCUMENT_ENDPOINT,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: dataToRequest,
    },
    meta: {
      content,
    },
  };
};

export const CREATE_DOCUMENT_SUCCESS = 'CREATE_DOCUMENT_SUCCESS';

export interface ICreateDocumentSuccess extends AnyAction {
  type: typeof CREATE_DOCUMENT_SUCCESS;
  data: any;
}

export const CREATE_NOTE = 'CREATE_NOTE';

export interface ICreateNote extends AnyAction {
  type: typeof CREATE_NOTE;
  request: {
    url: string;
    method: string;
    headers: any;
    data: any;
  };
}

export const createNote = (data: object): ICreateNote => {
  const dataToRequest = JSON.stringify(data);

  return {
    type: CREATE_NOTE,
    request: {
      url: NOTE_ENDPOINT,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: dataToRequest,
    },
  };
};

export const DELETE_NOTE = 'DELETE_NOTE';

export interface IDeleteNote extends AnyAction {
  type: typeof DELETE_NOTE;
  request: {
    url: string;
    method: string;
  };
}

export const deleteNote = (id: string): IDeleteNote => {
  return {
    type: DELETE_NOTE,
    request: {
      url: NOTE_ITEM_ENDPOINT(id),
      method: 'DELETE',
    },
  };
};

export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';

export const CREATE_NOTE_SUCCESS = 'CREATE_NOTE_SUCCESS';

export interface ICreateNoteSuccess extends AnyAction {
  type: typeof CREATE_NOTE_SUCCESS;
  data: any;
}

export const GET_NOTE_LIST = 'GET_NOTE_LIST';

export interface IGetNoteList extends AnyAction {
  type: typeof GET_NOTE_LIST;
  request: {
    method: string;
    url: string;
  };
}

export const getNoteList = (): IGetNoteList => {
  return {
    type: GET_NOTE_LIST,
    request: {
      method: 'GET',
      url: NOTE_LIST_ENDPOINT,
    },
  };
};

export const GET_NOTE_LIST_SUCCESS = 'GET_NOTE_LIST_SUCCESS';

export interface IGetNoteListSuccess extends AnyAction {
  type: typeof GET_NOTE_LIST_SUCCESS;
  data: any;
}

export const getNoteListSuccess = (data: any): IGetNoteListSuccess => {
  return {
    type: GET_NOTE_LIST_SUCCESS,
    data,
  };
};

export const UPDATE_NOTE = 'UPDATE_NOTE';

export interface IUpdateNote extends AnyAction {
  type: typeof UPDATE_NOTE;
  request: {
    url: string;
    method: string;
    headers: any;
    data: any;
  };
}

export const updateNote = (id: string, data: object): IUpdateNote => {
  const dataToRequest = JSON.stringify(data);

  return {
    type: UPDATE_NOTE,
    request: {
      url: NOTE_ITEM_ENDPOINT(id),
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: dataToRequest,
    },
  };
};

export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';

export interface IUpdateNoteSuccess extends Action {
  type: typeof UPDATE_NOTE_SUCCESS;
}

export const ATTACH_FILE = 'ATTACH_FILE';

export interface IAttachFile extends AnyAction {
  type: typeof ATTACH_FILE;
  request: {
    url: string;
    method: string;
    headers: any;
    data: any;
  };
}

export const attachFile = (id: string, content: string): IAttachFile => {
  const dataToRequest = new FormData();
  const blobContent = new Blob([content], {
    type: 'text/html',
  });

  dataToRequest.append('file', blobContent, id);

  return {
    type: ATTACH_FILE,
    request: {
      url: DOCUMENT_ITEM_CONTENT_ENDPOINT(id),
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      data: dataToRequest,
    },
  };
};

function* onCreateDocumentSuccess(action: AnyAction) {
  const {
    data: { _id, name },
    meta: { content },
  } = action;

  console.log(_id, content);

  yield put(attachFile(_id, content));

  yield store.addNotification({
    message: `Документ "${name}" был успешно создан`,
    type: 'success',
    insert: 'bottom',
    container: 'bottom-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 5000,
    },
  });

  yield put(push(`${routes.DOCUMENT.path}/${_id}`));
}

function* onSubjectActionSuccess(action: AnyAction) {
  yield put(getSubjectList());

  const actionTypeMessage =
    action.type === CREATE_SUBJECT_SUCCESS ? 'создана' : action.type === DELETE_SUBJECT_SUCCESS ? 'удалена' : '';

  yield store.addNotification({
    message: `Дисциплина была успешно ${actionTypeMessage}`,
    type: 'success',
    insert: 'bottom',
    container: 'bottom-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 5000,
    },
  });
}

function* onNoteActionSuccess(action: AnyAction) {
  yield put(getNoteList());

  const actionTypeMessage =
    action.type === CREATE_NOTE_SUCCESS
      ? 'создана'
      : action.type === DELETE_NOTE_SUCCESS
      ? 'удалена'
      : action.type === UPDATE_NOTE_SUCCESS
      ? 'обновлена'
      : '';

  yield store.addNotification({
    message: `Заметка была успешно ${actionTypeMessage}`,
    type: 'success',
    insert: 'bottom',
    container: 'bottom-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 5000,
    },
  });
}

export function* watchHome() {
  const doRequest = createRequestAction(true);

  yield takeEvery(CREATE_NOTE, doRequest);
  yield takeEvery(DELETE_NOTE, doRequest);
  yield takeEvery(UPDATE_NOTE, doRequest);
  yield takeEvery(CREATE_NOTE_SUCCESS, onNoteActionSuccess);
  yield takeEvery(DELETE_NOTE_SUCCESS, onNoteActionSuccess);
  yield takeEvery(UPDATE_NOTE_SUCCESS, onNoteActionSuccess);
  yield takeEvery(GET_NOTE_LIST, doRequest);

  yield takeEvery(CREATE_SUBJECT, doRequest);
  yield takeEvery(DELETE_SUBJECT, doRequest);
  yield takeEvery(DELETE_SUBJECT_SUCCESS, onSubjectActionSuccess);
  yield takeEvery(CREATE_SUBJECT_SUCCESS, onSubjectActionSuccess);
  yield takeEvery(GET_SUBJECT_LIST, doRequest);

  yield takeEvery(CREATE_DOCUMENT, doRequest);
  yield takeEvery(CREATE_DOCUMENT_SUCCESS, onCreateDocumentSuccess);
  yield takeEvery(GET_DOCUMENT_LIST, doRequest);

  yield takeEvery(ATTACH_FILE, doRequest);
}

export type IHomeActions =
  | IGetDocumentList
  | ICreateSubject
  | ICreateDocumentSuccess
  | ICreateSubjectSuccess
  | ICreateNote
  | IGetNoteList
  | IGetNoteListSuccess;
