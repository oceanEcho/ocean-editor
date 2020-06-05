import { AnyAction } from 'redux';
import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { routes } from '../../App/routes';
import { setAuth } from '../../App/actions';
import { createRequestAction } from '../../utils/request';

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

export const LOGIN_ERROR = 'LOGIN_ERROR';

export interface ILoginError extends AnyAction {
  type: typeof LOGIN_ERROR;
  error: any;
}

export const LOGOUT = 'LOGOUT';

export interface ILogout extends AnyAction {
  type: typeof LOGOUT;
}

export const logout = (): ILogout => ({ type: LOGOUT });

export function* watchLogin() {
  const doRequestWithoutToken = createRequestAction();

  yield takeEvery(LOGIN, doRequestWithoutToken);
  yield takeLatest(LOGIN_SUCCESS, redirectToHome);
  yield takeLatest(LOGOUT, doLogout);
}

function* doLogout() {
  yield localStorage.removeItem('token');
  yield put(setAuth(false));
  yield put(push(routes.LOGIN.path));
}

export function* redirectToHome(action: AnyAction) {
  yield put(push(routes.HOME.path));
}

export type ILoginActions = ILogin;
