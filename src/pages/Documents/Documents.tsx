import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Documents.module.scss';

import { homeSelector } from '../Home/reducer';
import { getDocumentList } from '../Home/actions';
import { Loader } from '../../components/Loader';
import { Layout } from '../../components/Layout';
import { Content } from '../../components/Layout/Content';
import { Row, Col } from '../../components/Row';
import { DocumentList } from '../../components/DocumentList';
import { Panel } from '../../components/Panel';
import { PanelHeader } from '../../components/Panel/PanelHeader';
import { IDocument } from '../../models/document';

export const Documents: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  const { documentList } = useSelector(homeSelector);

  let result = documentList.reduce((result: any, document: IDocument) => {
    result[document.subjectName] = result[document.subjectName] || [];
    result[document.subjectName].push(document);

    return result;
  }, {});

  console.log(result);

  useEffect(() => {
    dispatch(getDocumentList());
  }, [dispatch]);

  return (
    <>
      <Loader loading />
      <Layout>
        <Content>
          <Row fullwidth>
            <Col>
              <Panel className={styles.documentListPanel}>
                <PanelHeader underline>Все документы</PanelHeader>
                <DocumentList documents={documentList} dispatch={dispatch} />
              </Panel>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};
