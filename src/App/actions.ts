import { AnyAction } from 'redux';
import { call, takeEvery, put, select } from 'redux-saga/effects';

import { appSelector } from './reducer';

export const GET_DATA = 'GET_DATA';

export interface IGetData extends AnyAction {
  type: typeof GET_DATA;
  request: {
    method: string;
  };
}

export const getData = (): IGetData => {
  return {
    type: GET_DATA,
    request: {
      method: 'GET',
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
  try {
    const {
      request: { method },
    } = action;
    const {
      config: { apiUrl },
    } = yield select(appSelector);
    const data = yield call(() => {
      return fetch(apiUrl, { method }).then((res) => res.json());
    });
    yield put(getDataSuccess(data));
  } catch (error) {
    yield put(getDataError(error));
  }
}

export type IAppActions = IGetData;
