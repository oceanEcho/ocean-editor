import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styles from './App.module.scss';

import { routes } from './routes';
import { Document } from '../pages/Document/Document';
import { Home } from '../pages/Home';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path={routes.DOCUMENT.path}>
            <Document />
          </Route>
          <Route path={routes.HOME.path}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
