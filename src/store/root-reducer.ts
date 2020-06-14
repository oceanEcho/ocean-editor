import { Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import combineSectionReducers from 'combine-section-reducers';
import { History } from 'history';

import { app } from '../App/reducer';
import { home } from '../pages/Home/reducer';
import { document } from '../pages/Document/reducer';
import { subject } from '../pages/Subject/reducer';

export default (history: History): Reducer =>
  combineSectionReducers<any>({
    router: connectRouter(history),
    app,
    home,
    document,
    subject,
  });
