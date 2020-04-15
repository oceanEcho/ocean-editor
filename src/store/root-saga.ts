import { spawn } from 'redux-saga/effects';

import { appSaga } from '../App/sagas';

export function* rootSaga() {
  yield spawn(appSaga);
}