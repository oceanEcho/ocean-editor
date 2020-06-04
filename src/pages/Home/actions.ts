import { AnyAction } from 'redux';
import { call, takeEvery, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { appSelector } from '../../App/reducer';

export const GET_DOCUMENT_LIST = 'GET_DOCUMENT_LIST';

export interface IGetDocumentList extends AnyAction {
  type: typeof GET_DOCUMENT_LIST;
  request: {
    method: string;
    url: string;
  };
}

export const getDocumentList = (): IGetDocumentList => {
  return {
    type: GET_DOCUMENT_LIST,
    request: {
      method: 'GET',
      url: `/document/list`,
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

export function* watchHome() {
  yield takeEvery(GET_DOCUMENT_LIST, getDocumentListAsync);
}

function* getDocumentListAsync(action: AnyAction) {
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
      },
    })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };
  try {
    const data = yield call(apiCall);
    yield put(getDocumentListSuccess(data));
  } catch (error) {
    yield put(getDocumentListError(error));
  }
}

export type IAppActions = IGetDocumentList;
