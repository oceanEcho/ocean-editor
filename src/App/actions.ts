import { AnyAction } from 'redux';
import { call, takeEvery, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { appSelector } from './reducer';

export const GET_DATA = 'GET_DATA';

export interface IGetData extends AnyAction {
  type: typeof GET_DATA;
  request: {
    method: string;
    url: string;
  };
}

export const getData = (): IGetData => {
  return {
    type: GET_DATA,
    request: {
      method: 'GET',
      url: `/document/list`,
    },
  };
};

export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

export interface IGetDataSuccess extends AnyAction {
  type: typeof GET_DATA_SUCCESS;
  data: any;
}

export const getDataSuccess = (data: any): IGetDataSuccess => {
  return {
    type: GET_DATA_SUCCESS,
    data,
  };
};

export const GET_DATA_ERROR = 'GET_DATA_ERROR';

export interface IGetDataError extends AnyAction {
  type: typeof GET_DATA_ERROR;
  error: any;
}

export const getDataError = (error: any): IGetDataError => {
  return {
    type: GET_DATA_ERROR,
    error,
  };
};

export function* watchGetData() {
  yield takeEvery(GET_DATA, getDataAsync);
}

function* getDataAsync(action: AnyAction) {
  const { request } = action;
  const {
    config: { apiUrl },
  } = yield select(appSelector);
  const apiCall = () => {
    return axios({ ...request, url: `${apiUrl}${request.url}` })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };
  try {
    const data = yield call(apiCall);
    yield put(getDataSuccess(data));
  } catch (error) {
    yield put(getDataError(error));
  }
}

export type IAppActions = IGetData;
