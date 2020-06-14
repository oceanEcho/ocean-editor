import React, { useCallback } from 'react';
import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import styles from './LoginForm.module.scss';

import { Panel } from '../../../components/Panel';
import { Input } from '../../../components/Input';
import { Logo } from '../../../components/Logo';
import { Row } from '../../../components/Row';
import { Button } from '../../../components/Button';
import { login } from '../actions';
import { CustomLink } from '../../../components/CustomLink';
import { routes } from '../../../App/routes';

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
        <Logo className={styles.logo} />
      </Row>
      <Row fullwidth>
        <Input
          placeholder="Email..."
          className={cn(styles.loginRow, styles.input)}
          value={email}
          onValueChange={setEmail}
        />
      </Row>
      <Row fullwidth>
        <Input
          placeholder="Пароль..."
          className={cn(styles.loginRow, styles.input)}
          value={password}
          onValueChange={setPassword}
          type="password"
        />
      </Row>
      <Row fullwidth>
        <Button onClick={onLoginClick} className={cn(styles.loginRow, styles.loginButton)}>
          Войти
        </Button>
      </Row>
      <Row fullwidth justify="center">
        <CustomLink to={routes.REGISTER.path} view="link" className={styles.registerLink}>
          или Зарегистрироваться
        </CustomLink>
      </Row>
    </Panel>
  );
};
