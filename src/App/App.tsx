import React, { FunctionComponent, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { useDispatch } from 'react-redux';

import styles from './App.module.scss';

import { routes } from './routes';
import { Document } from '../pages/Document/Document';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import { getUser } from './actions';

export interface IAppProps {
  history: History;
}

const App: FunctionComponent<IAppProps> = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <div className={styles.app}>
      <ConnectedRouter history={history}>
        <Switch>
          <PrivateRoute path={routes.DOCUMENT.path} component={Document} />
          <Route path={routes.LOGIN.path} component={Login} />
          <PrivateRoute path={routes.HOME.path} component={Home}/>
        </Switch>
      </ConnectedRouter>
    </div>
  );
};

export default App;
