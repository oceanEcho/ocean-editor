import { AnyAction } from 'redux';
import { call, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

export const POST_DATA = 'POST_DATA';

export interface IPostData extends AnyAction {
  type: typeof POST_DATA;
  request: {
    url: string;
    method: string;
    headers: any;
    data: any;
  };
}

export const postData = (data: object): IPostData => {
  const dataToRequest = JSON.stringify(data);

  return {
    type: POST_DATA,
    request: {
      url: 'http://localhost:4000/documents',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: dataToRequest,
    },
  };
};

export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';

export interface IPostDataSuccess extends AnyAction {
  type: typeof POST_DATA_SUCCESS;
}

export const postDataSuccess = (): IPostDataSuccess => {
  return {
    type: POST_DATA_SUCCESS,
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
  const { request } = action;
  const apiCall = () => {
    return axios(request)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };
  try {
    yield call(apiCall);
    yield put(postDataSuccess());
  } catch (error) {
    yield put(postDataError(error));
  }
}

export type IAppActions = IPostData;
