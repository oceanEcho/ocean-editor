import { AnyAction } from 'redux';
import { takeEvery } from 'redux-saga/effects';

import { createRequestAction } from '../../utils/request';

export const UPDATE_DOCUMENT = 'UPDATE_DOCUMENT';

export interface IUpdateDocument extends AnyAction {
  type: typeof UPDATE_DOCUMENT;
  request: {
    url: string;
    method: string;
    headers: any;
    data: any;
  };
}

export const updateDocument = (id: string, data: object): IUpdateDocument => {
  const dataToRequest = JSON.stringify(data);

  return {
    type: UPDATE_DOCUMENT,
    request: {
      url: `/document/${id}`,
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: dataToRequest,
    },
  };
};

export const UPDATE_DOCUMENT_SUCCESS = 'UPDATE_DOCUMENT_SUCCESS';

export interface IUpdateDocumentSuccess extends AnyAction {
  type: typeof UPDATE_DOCUMENT_SUCCESS;
}

export const updateDocumentSuccess = (): IUpdateDocumentSuccess => ({
  type: UPDATE_DOCUMENT_SUCCESS,
});

export const UPDATE_DOCUMENT_ERROR = 'UPDATE_DOCUMENT_ERROR';

export interface IUpdateDocumentError extends AnyAction {
  type: typeof UPDATE_DOCUMENT_ERROR;
  error: any;
}

export const updateDocumentError = (error: any): IUpdateDocumentError => ({
  type: UPDATE_DOCUMENT_ERROR,
  error,
});

export const GET_DOCUMENT = 'GET_DOCUMENT';

export interface IGetDocument extends AnyAction {
  type: typeof GET_DOCUMENT;
  request: {
    method: string;
    url: string;
  };
}

export const getDocument = (id: string): IGetDocument => {
  return {
    type: GET_DOCUMENT,
    request: {
      method: 'GET',
      url: `/document/${id}`,
    },
  };
};

export const GET_DOCUMENT_SUCCESS = 'GET_DOCUMENT_SUCCESS';

export interface IGetDocumentSuccess extends AnyAction {
  type: typeof GET_DOCUMENT_SUCCESS;
  data: any;
}

export const CLOSE_DOCUMENT = 'CLOSE_DOCUMENT';

export interface ICloseDocument extends AnyAction {
  type: typeof CLOSE_DOCUMENT;
}

export const closeDocument = (): ICloseDocument => {
  return {
    type: CLOSE_DOCUMENT,
  };
};

export function* watchDocument() {
  const token = localStorage.getItem('token');
  const doRequest = createRequestAction(token);

  yield takeEvery(GET_DOCUMENT, doRequest);
  yield takeEvery(UPDATE_DOCUMENT, doRequest);
}

export type IDocumentActions = IUpdateDocument | IGetDocument | IGetDocumentSuccess | ICloseDocument;
