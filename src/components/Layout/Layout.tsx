import React, { FunctionComponent, ReactNode, useCallback } from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import styles from './Layout.module.scss';

import { Header } from './Header';
import { Logo } from '../Logo';
import { Main } from './Main';
import { Footer } from './Footer';
import { routes } from '../../App/routes';
import { logout } from '../../pages/Login/actions';
import { Button } from '../Button';

export interface ILayoutProps {
  children?: ReactNode | ReactNode[];
  headerChildren?: ReactNode;
}

export const Layout: FunctionComponent<ILayoutProps> = ({ children, headerChildren }) => {
  const dispatch = useDispatch();

  const onLogoClick = useCallback(() => {
    dispatch(push(routes.HOME.path));
  }, [dispatch]);

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <>
      <Header>
        <Logo onClick={onLogoClick} />
        <div className={styles.title}>{headerChildren}</div>
        <Button className={styles.logoutButton} onClick={onLogout}>
          Выйти
        </Button>
      </Header>
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
