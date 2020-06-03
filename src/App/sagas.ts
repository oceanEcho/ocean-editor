import { fork } from 'redux-saga/effects';

import { watchGetData } from './actions';
import { watchUpdateDocument } from '../pages/Document/actions';
import { watchLogin } from '../pages/Login/actions';


export function* appSaga() {
  yield fork(watchGetData);
  yield fork(watchUpdateDocument);
  yield fork(watchLogin);
}