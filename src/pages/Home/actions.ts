import { AnyAction } from 'redux';
import { takeEvery } from 'redux-saga/effects';
import { createRequestAction } from '../../utils/request';

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

export function* watchHome() {
  const token = localStorage.getItem('token');
  const doRequest = createRequestAction(token);

  yield takeEvery(CREATE_SUBJECT, doRequest);
  yield takeEvery(GET_DOCUMENT_LIST, doRequest);
}

export type IHomeActions = IGetDocumentList | ICreateSubject;
