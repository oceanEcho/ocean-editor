import { AnyAction } from 'redux';
import { push } from 'connected-react-router';
import { takeEvery, put } from 'redux-saga/effects';

import { createRequestAction } from '../../utils/request';
import { SUBJECT_LIST_ENDPOINT } from '../../api/endpoints';
import { routes } from '../../App/routes';

export const GET_DOCUMENT_LIST = 'GET_DOCUMENT_LIST';

export interface IGetDocumentList extends AnyAction {
  type: typeof GET_DOCUMENT_LIST;
  request: {
    method: string;
    url: string;
  };
}

export const getDocumentList = (count: number = 10): IGetDocumentList => {
  return {
    type: GET_DOCUMENT_LIST,
    request: {
      method: 'GET',
      url: `/document/list?count=${count}`,
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
      url: `/subject`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: dataToRequest,
    },
  };
};

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
}

export const createDocument = (data: object): ICreateDocument => {
  const dataToRequest = JSON.stringify(data);

  return {
    type: CREATE_DOCUMENT,
    request: {
      url: `/document`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: dataToRequest,
    },
  };
};

export const CREATE_DOCUMENT_SUCCESS = 'CREATE_DOCUMENT_SUCCESS';

export interface ICreateDocumentSuccess extends AnyAction {
  type: typeof CREATE_DOCUMENT_SUCCESS;
  data: any;
}

function* openDocument(action: AnyAction) {
  const {
    data: { _id },
  } = action;

  yield put(push(`${routes.DOCUMENT.path}/${_id}`));
}

export function* watchHome() {
  const token = localStorage.getItem('token');
  const doRequest = createRequestAction(token);

  yield takeEvery(CREATE_SUBJECT, doRequest);

  yield takeEvery(GET_DOCUMENT_LIST, doRequest);
  yield takeEvery(GET_SUBJECT_LIST, doRequest);

  yield takeEvery(CREATE_DOCUMENT, doRequest);
  yield takeEvery(CREATE_DOCUMENT_SUCCESS, openDocument);
}

export type IHomeActions = IGetDocumentList | ICreateSubject | ICreateDocumentSuccess;
