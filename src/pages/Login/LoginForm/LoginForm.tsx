import React from 'react';
import { FunctionComponent } from 'react';

import styles from './LoginForm.module.scss';

import { Panel } from '../../../components/Panel';
import { Input } from '../../../components/Input';
import { Logo } from '../../../components/Logo';
import { Row } from '../../../components/Row';

export interface ILoginFormProps {
  className?: string;
  title?: string;
}

export const LoginForm: FunctionComponent<ILoginFormProps> = ({ className = '', title = 'Login' }) => {
  return (
    <Panel className={styles.root}>
      <Row fullwidth justify='center'>
        <Logo />
      </Row>
      <Row fullwidth>
        <Input></Input>
      </Row>
      <Row fullwidth>
        <Input></Input>
      </Row>
    </Panel>
  );
};
