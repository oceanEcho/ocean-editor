import { AnyAction } from 'redux';
import { call, takeEvery, put, select } from 'redux-saga/effects';

import { appSelector } from '../../App/reducer';

export const POST_DATA = 'POST_DATA';

export interface IPostData extends AnyAction {
  type: typeof POST_DATA;
  request: {
    method: string;
    headers: any;
    body: any;
  };
}

export const postData = (data: object): IPostData => {
  const dataToRequest = JSON.stringify(data);
  console.log(dataToRequest);

  return {
    type: POST_DATA,
    request: {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: dataToRequest,
    },
  };
};

export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';

export interface IPostDataSuccess extends AnyAction {
  type: typeof POST_DATA_SUCCESS;
  data: any;
}

export const postDataSuccess = (data: any): IPostDataSuccess => {
  return {
    type: POST_DATA_SUCCESS,
    data,
  };
};

export const POST_DATA_ERROR = 'POST_DATA_ERROR';

export interface IPostDataError extends AnyAction {
  type: typeof POST_DATA_ERROR;
  error: any;
}

export const postDataError = (error: any): IPostDataError => {
  return {
    type: POST_DATA_ERROR,
    error,
  };
};

export function* watchPostData() {
  yield takeEvery(POST_DATA, postDataAsync);
}

function* postDataAsync(action: AnyAction) {
  try {
    const {
      request: { method },
    } = action;
    const {
      config: { apiUrl },
    } = yield select(appSelector);
    const data = yield call(() => {
      return fetch(`${apiUrl}/document`, {
        method,
      }).then((res) => {
        return res.json();
      });
    });
    yield put(postDataSuccess(data));
  } catch (error) {
    yield put(postDataError(error));
  }
}

export type IAppActions = IPostData;
