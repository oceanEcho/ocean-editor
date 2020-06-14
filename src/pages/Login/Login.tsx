import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import styles from './Login.module.scss';

import { Main } from '../../components/Layout/Main';
import { LoginForm } from './LoginForm';
import { Loader } from '../../components/Loader';
import { routes } from '../../App/routes';
import { appSelector } from '../../App/reducer';
import { Helmet } from 'react-helmet';

export const Login: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  const {
    authenticated,
    config: { appName },
  } = useSelector(appSelector);

  useEffect(() => {
    if (authenticated) {
      dispatch(push(routes.HOME.path));
    }
  }, [authenticated, dispatch]);

  return (
    <>
      <Helmet>
        <title>{`${appName}: вход`}</title>
      </Helmet>
      <Loader loading />
      <Main className={styles.main}>
        <LoginForm className={styles.form} />
      </Main>
    </>
  );
};
