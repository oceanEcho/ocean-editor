import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import createRootReducer from './root-reducer';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware()

export const history = createBrowserHistory()

export default function configureStore(initialState = {}) {
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
      )
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

