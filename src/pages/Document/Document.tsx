import React from 'react';
import { FunctionComponent } from 'react';

import { CustomEditor } from '../../components/CustomEditor';
import { ToolPanel } from '../../components/ToolPanel';
import { Icon } from '../../components/Icon';
import { Layout } from '../../components/Layout';

export const Document: FunctionComponent<{}> = () => {
  return (
    <Layout>
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
    </Layout>
  );
};
