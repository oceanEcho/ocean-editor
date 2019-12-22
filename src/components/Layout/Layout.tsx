import React, { FunctionComponent, ReactNode, useCallback } from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import { Header } from './Header';
import { Logo } from '../Logo';
import { Main } from './Main';
import { Footer } from './Footer';
import { routes } from '../../App/routes';

export interface ILayoutProps {
  children?: ReactNode | ReactNode[];
}

export const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  const dispatch = useDispatch();

  const onLogoClick = useCallback(() => {
    dispatch(push(routes.HOME.path))
  }, [dispatch])

  return <>
    <Header>
      <Logo onClick={onLogoClick} />
    </Header>
    <Main>
      {children}
    </Main>
    <Footer />
  </>
}