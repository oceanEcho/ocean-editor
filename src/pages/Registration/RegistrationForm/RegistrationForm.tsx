import React, { useCallback } from 'react';
import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import styles from './RegistrationForm.module.scss';

import { Panel } from '../../../components/Panel';
import { Input } from '../../../components/Input';
import { Logo } from '../../../components/Logo';
import { Row } from '../../../components/Row';
import { Button } from '../../../components/Button';
import { register } from '../actions';

export interface IRegistrationFormProps {
  className?: string;
  title?: string;
}

export const RegistrationForm: FunctionComponent<IRegistrationFormProps> = ({ className = '', title = 'Login' }) => {
  const dispatch = useDispatch();

  const rootClassName = cn(styles.root, className);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const onRegisterClick = useCallback(() => {
    if (!name || !password || !email || password !== passwordConfirmation) {
      return;
    }

    const credentials = {
      email,
      password,
      name,
    };

    dispatch(register(credentials));
  }, [dispatch, email, name, password, passwordConfirmation]);

  return (
    <Panel className={rootClassName}>
      <Row fullwidth justify="center">
        <Logo className={styles.logo} />
      </Row>
      <Row fullwidth>
        <Input placeholder="Имя..." className={cn(styles.credRow, styles.input)} value={name} onValueChange={setName} />
      </Row>
      <Row fullwidth>
        <Input
          placeholder="Email..."
          className={cn(styles.credRow, styles.input)}
          value={email}
          onValueChange={setEmail}
        />
      </Row>
      <Row fullwidth>
        <Input
          placeholder="Пароль..."
          className={cn(styles.credRow, styles.input)}
          value={password}
          onValueChange={setPassword}
          type="password"
        />
      </Row>
      <Row fullwidth>
        <Input
          placeholder="Подтверждение пароля..."
          className={cn(styles.credRow, styles.input)}
          value={passwordConfirmation}
          onValueChange={setPasswordConfirmation}
          type="password"
        />
      </Row>
      <Row fullwidth>
        <Button onClick={onRegisterClick} className={cn(styles.credRow, styles.registerButton)}>
          Зарегистрироваться
        </Button>
      </Row>
    </Panel>
  );
};
