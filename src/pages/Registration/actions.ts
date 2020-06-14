import { AnyAction } from 'redux';
import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { routes } from '../../App/routes';
import { createRequestAction } from '../../utils/request';
import { REGISTER_ENDPOINT } from '../../api/endpoints';

export const REGISTER = 'REGISTER';

export interface IRegister extends AnyAction {
  type: typeof REGISTER;
  request: {
    url: string;
    method: string;
    headers: any;
    data: any;
  };
}

export const register = (data: object): IRegister => {
  const dataToRequest = JSON.stringify(data);

  return {
    type: REGISTER,
    request: {
      url: REGISTER_ENDPOINT,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: dataToRequest,
    },
  };
};

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export interface IRegisterSuccess extends AnyAction {
  type: typeof REGISTER_SUCCESS;
  data: object;
}

export const REGISTER_ERROR = 'REGISTER_ERROR';

export interface IRegisterError extends AnyAction {
  type: typeof REGISTER_ERROR;
  error: any;
}

export function* watchRegister() {
  const doRequestWithoutToken = createRequestAction();

  yield takeEvery(REGISTER, doRequestWithoutToken);
  yield takeLatest(REGISTER_SUCCESS, redirectToLogin);
}

export function* redirectToLogin(action: AnyAction) {
  yield put(push(routes.LOGIN.path));
}

export type IRegisterActions = IRegister;
