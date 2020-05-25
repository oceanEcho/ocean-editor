import React, { FunctionComponent } from 'react';

import styles from './Login.module.scss';

import { Main } from '../../components/Layout/Main';
import { LoginForm } from './LoginForm';
import { Loader } from '../../components/Loader';

export const Login: FunctionComponent<{}> = () => {
  return (
    <>
      <Loader loading />
      <Main className={styles.main}>
        <LoginForm className={styles.form} />
      </Main>
    </>
  );
};
