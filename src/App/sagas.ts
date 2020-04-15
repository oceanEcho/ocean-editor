import { fork } from 'redux-saga/effects';

import { watchGetData } from './actions';


export function* appSaga() {
  yield fork(watchGetData);
}