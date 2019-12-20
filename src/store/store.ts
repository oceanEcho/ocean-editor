import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './root-reducer';

export const history = createBrowserHistory()

export default function configureStore(initialState = {}) {
  return createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history)
      )
    ),
  );
}