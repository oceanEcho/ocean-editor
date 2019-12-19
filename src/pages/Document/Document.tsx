import React from 'react';
import { FunctionComponent } from 'react';

import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import { CustomEditor } from '../../components/CustomEditor';
import { ToolPanel } from '../../components/ToolPanel';
import { Icon } from '../../components/Icon';
import { Footer } from '../../components/Footer';
import { Main } from '../../components/Main';

export const Document: FunctionComponent<{}> = () => {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Main>
        <CustomEditor />
        <ToolPanel position="left">
          <Icon type="file" />
          <Icon type="folder" />
          <Icon type="save" />
          <Icon type="edit" />
          <Icon type="photoCamera" />
        </ToolPanel>
        <ToolPanel position="right">
          <Icon type="user" />
          <Icon type="settings" />
        </ToolPanel>
      </Main>
      <Footer>© 2019 Ivan Zaitsev | About | Contact</Footer>
    </>
  );
};
