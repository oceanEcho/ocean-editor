import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Subject.module.scss';

import { Loader } from '../../components/Loader';
import { Layout } from '../../components/Layout';
import { Content } from '../../components/Layout/Content';
import { Helmet } from 'react-helmet';
import { appSelector } from '../../App/reducer';
import { getSubject, getSubjectDocumentList } from './actions';
import { Row, Col } from '../../components/Row';
import { Panel } from '../../components/Panel';
import { DocumentList } from '../../components/DocumentList';
import { subjectSelector } from './reducer';
import { PanelHeader } from '../../components/Panel/PanelHeader';

export interface ISubjectProps {
  id: string;
}

export const Subject: FunctionComponent<ISubjectProps> = ({ id }) => {
  const dispatch = useDispatch();

  const {
    config: { appName },
  } = useSelector(appSelector);
  const {
    entry: { name },
    documentList,
  } = useSelector(subjectSelector);

  useEffect(() => {
    dispatch(getSubject(id));
    dispatch(getSubjectDocumentList(id));
  }, [dispatch, id]);

  return (
    <>
      <Helmet>
        <title>{`${appName} - ${name}`}</title>
      </Helmet>
      <Loader loading />
      <Layout>
        <Content>
          <Row fullwidth>
            <Col>
              <Panel className={styles.documentListPanel}>
                <PanelHeader underline>{name}</PanelHeader>
                {!!documentList.length && (
                  <DocumentList documents={documentList} dispatch={dispatch} possibleToDelete />
                )}
                {!documentList.length && (
                  <Row fullwidth justify="center">
                    Пусто
                  </Row>
                )}
              </Panel>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};
