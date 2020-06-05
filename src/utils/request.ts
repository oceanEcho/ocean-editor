import { AnyAction } from 'redux';
import { select, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { appSelector } from '../App/reducer';

export const createRequestAction = (token?: string | null) => function* doRequest(action: AnyAction) {
  const { request, type } = action;
  const {
    config: { apiUrl },
  } = yield select(appSelector);
  const apiCall = () => {
    return axios({
      ...request,
      url: `${apiUrl}${request.url}`,
      headers: {
        ...request.headers,
        ...(token ? {Authorization: `Bearer ${token}`} : {}),
      },
    })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };
  try {
    const data = yield call(apiCall);

    const successAction = (data: any) => ({
      type: `${type}_SUCCESS`,
      data,
    });

    yield put(successAction(data));
  } catch (error) {
    const errorAction = (error: any) => ({
      type: `${type}_SUCCESS`,
      error,
    });

    yield put(errorAction(error));
  }
}
