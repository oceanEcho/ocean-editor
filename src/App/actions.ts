import { AnyAction } from 'redux';
import { takeEvery, takeLatest } from 'redux-saga/effects';

import { createRequestAction } from '../utils/request';

export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

export const SET_AUTH = 'SET_AUTH';

export interface ISetAuth extends AnyAction {
  type: typeof SET_AUTH;
  authenticated: boolean;
}

export const setAuth = (authenticated: boolean): ISetAuth => ({
  type: SET_AUTH,
  authenticated,
});

export const GET_DATA = 'GET_DATA';

export interface IGetData extends AnyAction {
  type: typeof GET_DATA;
  request: {
    method: string;
    url: string;
  };
}

export const getData = (): IGetData => ({
  type: GET_DATA,
  request: {
    method: 'GET',
    url: `/document/list`,
  },
});

export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

export interface IGetDataSuccess extends AnyAction {
  type: typeof GET_DATA_SUCCESS;
  data: any;
}

export const getDataSuccess = (data: any): IGetDataSuccess => ({
  type: GET_DATA_SUCCESS,
  data,
});

export const GET_DATA_ERROR = 'GET_DATA_ERROR';

export interface IGetDataError extends AnyAction {
  type: typeof GET_DATA_ERROR;
  error: any;
}

export const getDataError = (error: any): IGetDataError => ({
  type: GET_DATA_ERROR,
  error,
});

export const GET_USER = 'GET_USER';

export interface IGetUser extends AnyAction {
  type: typeof GET_USER;
  request: {
    method: string;
    url: string;
  };
}

export const getUser = (): IGetUser => ({
  type: GET_USER,
  request: {
    method: 'GET',
    url: `/user`,
  },
});

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export interface IGetUserSuccess extends AnyAction {
  type: typeof GET_USER_SUCCESS;
  data: any;
}

export const GET_USER_ERROR = 'GET_USER_ERROR';

export interface IGetUserError extends AnyAction {
  type: typeof GET_USER_ERROR;
  error: any;
}

export function* watchApp() {
  const doRequest = createRequestAction(true);

  yield takeEvery(GET_DATA, doRequest);
  yield takeLatest(GET_USER, doRequest);
}

export type IAppActions = IGetData | IGetUserSuccess;
