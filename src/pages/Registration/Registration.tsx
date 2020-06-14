import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import styles from './Registration.module.scss';

import { Main } from '../../components/Layout/Main';
import { RegistrationForm } from './RegistrationForm';
import { Loader } from '../../components/Loader';
import { routes } from '../../App/routes';
import { appSelector } from '../../App/reducer';
import { Helmet } from 'react-helmet';

export const Registration: FunctionComponent<{}> = () => {
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
        <title>{`${appName} - Регистрация`}</title>
      </Helmet>
      <Loader loading />
      <Main className={styles.main}>
        <RegistrationForm className={styles.form} />
      </Main>
    </>
  );
};
