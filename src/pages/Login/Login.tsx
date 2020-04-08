import React, { FunctionComponent } from 'react';

import styles from './Login.module.scss';

import { Main } from '../../components/Layout/Main';
import { LoginForm } from './LoginForm';

export const Login: FunctionComponent<{}> = () => {
  return (
    <>
      <Main className={styles.main}>
        <LoginForm className={styles.form} />
      </Main>
    </>
  );
};