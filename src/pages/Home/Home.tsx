import React from 'react';
import { FunctionComponent } from 'react';

import { Layout } from '../../components/Layout';
import { Panel } from '../../components/Panel';
import { Content } from '../../components/Layout/Content';
import { routes } from '../../App/routes';
import { CustomLink } from '../../components/CustomLink';
import { Icon } from '../../components/Icon';

export const Home: FunctionComponent<{}> = () => {
  return (
    <Layout>
      <Content>
        <Panel><CustomLink to={`${routes.DOCUMENT.path}/0`}><Icon type='file'></Icon> New document</CustomLink></Panel>
        <Panel><CustomLink to={`${routes.DOCUMENT.path}/0`}><Icon type='folder' /> Open document</CustomLink></Panel>
        <Panel><CustomLink to={`${routes.DOCUMENT.path}/0`}><Icon type='file' /> Add discipline</CustomLink></Panel>
        <Panel><CustomLink to={`${routes.DOCUMENT.path}/0`}><Icon type='edit' /> Add note</CustomLink></Panel>
      </Content>
    </Layout >
  );
};
