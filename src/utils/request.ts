import { AnyAction } from 'redux';
import { select, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { store } from 'react-notifications-component';

import { appSelector } from '../App/reducer';

export const createRequestAction = (authenticated: boolean = false) =>
  function* doRequest(action: AnyAction) {
    const { request, type } = action;
    const {
      config: { apiUrl },
    } = yield select(appSelector);

    const token = yield localStorage.getItem('token');

    const apiCall = () => {
      return axios({
        ...request,
        url: `${apiUrl}${request.url}`,
        headers: {
          ...request.headers,
          ...(authenticated && token ? { Authorization: `Bearer ${token}` } : {}),
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
        type: `${type}_ERROR`,
        error,
      });

      yield put(errorAction(error));

      const { status, message } = error;

      const { authorized } = yield select(appSelector);

      if (status !== 401 && authorized) {
        yield store.addNotification({
          message: message ? message : 'Ошибка!',
          type: 'danger',
          insert: 'bottom',
          container: 'bottom-right',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],
          dismiss: {
            duration: 5000,
          },
        });
      }
    }
  };
