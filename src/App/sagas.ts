import { fork } from 'redux-saga/effects';

import { watchApp } from './actions';
import { watchDocument } from '../pages/Document/actions';
import { watchLogin } from '../pages/Login/actions';
import { watchHome } from '../pages/Home/actions';
import { watchSubject } from '../pages/Subject/actions';
import { watchRegister } from '../pages/Registration/actions';

export function* appSaga() {
  yield fork(watchApp);
  yield fork(watchDocument);
  yield fork(watchLogin);
  yield fork(watchHome);
  yield fork(watchSubject);
  yield fork(watchRegister);
}
