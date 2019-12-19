import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';

export default function configureStore(initialState={}) {
 return createStore(
   rootReducer,
   initialState,
   composeWithDevTools(),
 );
}