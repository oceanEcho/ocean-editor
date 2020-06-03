import React, { useCallback } from 'react';
import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import cn from 'classnames';

import styles from './LoginForm.module.scss';

import { Panel } from '../../../components/Panel';
import { Input } from '../../../components/Input';
import { Logo } from '../../../components/Logo';
import { Row } from '../../../components/Row';
import { Button } from '../../../components/Button';
import { routes } from '../../../App/routes';
import { login } from '../actions';

export interface ILoginFormProps {
  className?: string;
  title?: string;
}

export const LoginForm: FunctionComponent<ILoginFormProps> = ({ className = '', title = 'Login' }) => {
  const dispatch = useDispatch();

  const rootClassName = cn(styles.root, className);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const credentials = {
    email,
    password,
  };

  const onLoginClick = useCallback(() => {
    dispatch(login(credentials));
  }, [dispatch, credentials]);

  return (
    <Panel className={rootClassName}>
      <Row fullwidth justify="center">
        <Logo />
      </Row>
      <Row fullwidth>
        <Input
          placeholder="Email..."
          className={cn(styles.loginRow, styles.input)}
          value={email}
          onChange={setEmail}
        />
      </Row>
      <Row fullwidth>
        <Input
          placeholder="Password..."
          className={cn(styles.loginRow, styles.input)}
          value={password}
          onChange={setPassword}
        />
      </Row>
      <Row fullwidth>
        <Button onClick={onLoginClick} className={cn(styles.loginRow, styles.input)}>
          Login
        </Button>
      </Row>
    </Panel>
  );
};
