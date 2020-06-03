import React, { FunctionComponent, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { useDispatch, useSelector } from 'react-redux';

import styles from './App.module.scss';

import { routes } from './routes';
import { Document } from '../pages/Document/Document';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

import { getData } from './actions';
import { appSelector } from './reducer';

export interface IAppProps {
  history: History;
}

const App: FunctionComponent<IAppProps> = ({ history }) => {
  const dispatch = useDispatch();
  const { authorized } = useSelector(appSelector);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/'>
            {authorized ? <Home /> : <Login />}
          </Route>
          <Route path={routes.DOCUMENT.path}>
            <Document />
          </Route>
          <Route path={routes.LOGIN.path}>
            <Login />
          </Route>
          <Route path={routes.HOME.path}>
            <Home />
          </Route>
        </Switch>
      </ConnectedRouter>
    </div>
  );
};

export default App;
