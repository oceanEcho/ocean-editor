import React, { FunctionComponent } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { appSelector } from '../../App/reducer';
import { routes } from '../../App/routes';

export interface IProtectedRoute extends RouteProps {
  component: any;
}

export const PrivateRoute: FunctionComponent<IProtectedRoute> = ({ component: Component, ...rest }) => {
  const { authenticated } = useSelector(appSelector);

  return (
    <Route
      {...rest}
      render={(props) => (authenticated ? <Component {...props} /> : <Redirect to={routes.LOGIN.path} />)}
    />
  );
};
