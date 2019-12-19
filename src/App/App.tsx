import React from 'react';

import styles from './App.module.scss';

import { CustomEditor } from '../components/CustomEditor';
import { ToolPanel } from '../components/ToolPanel';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Icon } from '../components/Icon';
import { Logo } from '../components/Logo';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header>
        <Logo />
      </Header>
      <main className={styles.content}>
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
      </main>
      <Footer>© 2019 Ivan Zaitsev | About | Contact</Footer>
    </div>
  );
};

export default App;
