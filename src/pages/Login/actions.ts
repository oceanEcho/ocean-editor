import { AnyAction } from 'redux';
import { call, takeEvery, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { appSelector } from '../../App/reducer';
import { push } from 'connected-react-router';
import { routes } from '../../App/routes';

export const LOGIN = 'LOGIN';

export interface ILogin extends AnyAction {
  type: typeof LOGIN;
  request: {
    url: string;
    method: string;
    headers: any;
    data: any;
  };
}

export const login = (data: object): ILogin => {
  const dataToRequest = JSON.stringify(data);

  return {
    type: LOGIN,
    request: {
      url: `/login`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: dataToRequest,
    },
  };
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export interface ILoginSuccess extends AnyAction {
  type: typeof LOGIN_SUCCESS;
  data: object;
}

export const loginSuccess = (data: object): ILoginSuccess => {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
};

export const LOGIN_ERROR = 'LOGIN_ERROR';

export interface ILoginError extends AnyAction {
  type: typeof LOGIN_ERROR;
  error: any;
}

export const loginError = (error: any): ILoginError => {
  return {
    type: LOGIN_ERROR,
    error,
  };
};

export function* watchLogin() {
  yield takeEvery(LOGIN, loginAsync);
  yield takeLatest(LOGIN_SUCCESS, redirectToHome);
}

function* redirectToHome(action: AnyAction) {
  yield put(push(routes.HOME.path))
}

function* loginAsync(action: AnyAction) {
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

    if (data) {
      localStorage.setItem('token', data);
    }

    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginError(error));
  }
}

export type ILoginActions = ILogin;
