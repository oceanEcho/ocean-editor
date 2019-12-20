import { Reducer } from 'redux';
import { connectRouter } from 'connected-react-router'
import combineSectionReducers from 'combine-section-reducers'
import { History } from 'history';

import { app } from '../App/reducer';

export default (history: History): Reducer =>
  combineSectionReducers<any>({
    router: connectRouter(history),
    app,
  });
