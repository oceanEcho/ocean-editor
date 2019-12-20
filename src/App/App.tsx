import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history'

import styles from './App.module.scss';

import { routes } from './routes';
import { Document } from '../pages/Document/Document';
import { Home } from '../pages/Home';

export interface IAppProps {
  history: History;
}

const App: FunctionComponent<IAppProps> = ({ history }) => {
  return (
    <div className={styles.app}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={routes.DOCUMENT.path}>
            <Document />
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
