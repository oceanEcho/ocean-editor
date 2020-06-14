import { AnyAction } from 'redux';
import { takeEvery, put } from 'redux-saga/effects';
import { store } from 'react-notifications-component';

import { createRequestAction } from '../../utils/request';
import { DOCUMENT_ITEM_ENDPOINT } from '../../api/endpoints';
import { getDocumentList } from '../Home/actions';

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
      url: DOCUMENT_ITEM_ENDPOINT(id),
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
      url: DOCUMENT_ITEM_ENDPOINT(id),
    },
  };
};

export const GET_DOCUMENT_SUCCESS = 'GET_DOCUMENT_SUCCESS';

export interface IGetDocumentSuccess extends AnyAction {
  type: typeof GET_DOCUMENT_SUCCESS;
  data: any;
}

export const DELETE_DOCUMENT = 'DELETE_DOCUMENT';

export interface IDeleteDocument extends AnyAction {
  type: typeof DELETE_DOCUMENT;
  request: {
    method: string;
    url: string;
  };
}

export const deleteDocument = (id: string): IDeleteDocument => {
  return {
    type: DELETE_DOCUMENT,
    request: {
      method: 'DELETE',
      url: DOCUMENT_ITEM_ENDPOINT(id),
    },
  };
};

export const DELETE_DOCUMENT_SUCCESS = 'DELETE_DOCUMENT_SUCCESS';

export interface IDeleteDocumentSuccess extends AnyAction {
  type: typeof DELETE_DOCUMENT_SUCCESS;
  data: any;
}

export const DELETE_DOCUMENT_ERROR = 'DELETE_DOCUMENT_ERROR';

export interface IDeleteDocumentError extends AnyAction {
  type: typeof DELETE_DOCUMENT_ERROR;
  error: any;
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

export function* onDeleteDocumentSuccess(action: AnyAction) {
  const {
    data: { message },
  } = action;
  yield put(getDocumentList());
  yield store.addNotification({
    message,
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

export function* watchDocument() {
  const token = localStorage.getItem('token');
  const doRequest = createRequestAction(token);

  yield takeEvery(GET_DOCUMENT, doRequest);
  yield takeEvery(UPDATE_DOCUMENT, doRequest);

  yield takeEvery(DELETE_DOCUMENT, doRequest);
  yield takeEvery(DELETE_DOCUMENT_SUCCESS, onDeleteDocumentSuccess);
}

export type IDocumentActions =
  | IUpdateDocument
  | IGetDocument
  | IGetDocumentSuccess
  | IDeleteDocument
  | IDeleteDocumentSuccess
  | IDeleteDocumentError
  | ICloseDocument;
