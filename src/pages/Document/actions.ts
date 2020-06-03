import { AnyAction } from 'redux';
import { call, takeEvery, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { appSelector } from '../../App/reducer';

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

export const updateDocumentSuccess = (): IUpdateDocumentSuccess => {
  return {
    type: UPDATE_DOCUMENT_SUCCESS,
  };
};

export const UPDATE_DOCUMENT_ERROR = 'UPDATE_DOCUMENT_ERROR';

export interface IUpdateDocumentError extends AnyAction {
  type: typeof UPDATE_DOCUMENT_ERROR;
  error: any;
}

export const updateDocumentError = (error: any): IUpdateDocumentError => {
  return {
    type: UPDATE_DOCUMENT_ERROR,
    error,
  };
};

export function* watchUpdateDocument() {
  yield takeEvery(UPDATE_DOCUMENT, updateDocumentAsync);
}

function* updateDocumentAsync(action: AnyAction) {
  const { request } = action;
  const {
    config: { apiUrl },
  } = yield select(appSelector);
  const apiCall = () => {
    const token = localStorage.getItem('token');
    return axios({
      ...request,
      url: `${apiUrl}${request.url}`,
      headers: {
        ...request.headers,
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };
  try {
    yield call(apiCall);
    yield put(updateDocumentSuccess());
  } catch (error) {
    yield put(updateDocumentError(error));
  }
}

export type IDocumentActions = IUpdateDocument;
