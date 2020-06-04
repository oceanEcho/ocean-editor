import { AnyAction } from 'redux';
import { call, takeEvery, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { appSelector, routerSelector } from './reducer';
import { redirectToHome } from '../pages/Login/actions';
import { push } from 'connected-react-router';
import { routes } from './routes';

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

export const getUserSuccess = (data: any): IGetUserSuccess => ({
  type: GET_USER_SUCCESS,
  data,
});

export const GET_USER_ERROR = 'GET_USER_ERROR';

export interface IGetUserError extends AnyAction {
  type: typeof GET_USER_ERROR;
  error: any;
}

export const getUserError = (error: any): IGetUserError => ({
  type: GET_USER_ERROR,
  error,
});

export function* watchApp() {
  yield takeEvery(GET_DATA, getDataAsync);
  yield takeLatest(GET_USER, getUserAsync);
  yield takeLatest(GET_USER_SUCCESS, redirectToHome);
  yield takeLatest(LOCATION_CHANGE, checkAuthOnLocationChange);
}

function* checkAuthOnLocationChange() {
  const { authenticated } = yield select(appSelector);
  const {
    location: { pathname },
  } = yield select(routerSelector);

  console.log(pathname, routes.LOGIN.path);
  if (!authenticated && pathname !== routes.LOGIN.path) {
    yield put(push(routes.LOGIN.path));
  }
}

function* getUserAsync(action: AnyAction) {
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
    yield put(getUserSuccess(data));
  } catch (error) {
    yield put(getUserError(error));
  }
}

function* getDataAsync(action: AnyAction) {
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
    yield put(getDataSuccess(data));
  } catch (error) {
    yield put(getDataError(error));
  }
}

export type IAppActions = IGetData | IGetUserSuccess;
