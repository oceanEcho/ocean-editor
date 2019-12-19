import React from 'react';
import { FunctionComponent } from 'react';

import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import { Footer } from '../../components/Footer';
import { Main } from '../../components/Main';

export const Home: FunctionComponent<{}> = () => {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Main>
        Main
      </Main>
      <Footer>© 2019 Ivan Zaitsev | About | Contact</Footer>
    </>
  );
};
