import React, { FunctionComponent, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { useDispatch, useSelector } from 'react-redux';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import styles from './App.module.scss';

import { routes } from './routes';
import { Document } from '../pages/Document';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import { getUser } from './actions';
import { appSelector } from './reducer';
import { withParamsId } from '../utils/route';
import { Documents } from '../pages/Documents';
import { Subject } from '../pages/Subject';
import { Registration } from '../pages/Registration';

export interface IAppProps {
  history: History;
}

const App: FunctionComponent<IAppProps> = ({ history }) => {
  const dispatch = useDispatch();

  const { authenticated } = useSelector(appSelector);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (authenticated === null) {
    return null;
  }

  return (
    <div className={styles.app}>
      <ReactNotification />
      <ConnectedRouter history={history}>
        <Switch>
          <PrivateRoute path={routes.DOCUMENT_LIST.path} component={Documents} />
          <PrivateRoute path={routes.DOCUMENT_ITEM.path} component={withParamsId(Document)} />
          <PrivateRoute path={routes.SUBJECT_ITEM.path} component={withParamsId(Subject)} />
          <Route path={routes.LOGIN.path} component={Login} />
          <Route path={routes.REGISTER.path} component={Registration} />
          <PrivateRoute path={routes.HOME.path} component={Home} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
};

export default App;
