import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { homeSelector } from '../Home/reducer';
import { getDocumentList } from '../Home/actions';
import { Loader } from '../../components/Loader';
import { Layout } from '../../components/Layout';
import { Content } from '../../components/Layout/Content';
import { Row, Col } from '../../components/Row';
import { DocumentList } from '../../components/DocumentList';
import { groupObjectArrayByKey } from '../../utils/array';
import { ExpandablePanel } from '../../components/ExpandablePanel';
import { Helmet } from 'react-helmet';
import { appSelector } from '../../App/reducer';

export const Documents: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  const {
    config: { appName },
  } = useSelector(appSelector);
  const { documentList } = useSelector(homeSelector);

  const groupedDocuments = groupObjectArrayByKey(documentList, 'subjectName');

  useEffect(() => {
    dispatch(getDocumentList());
  }, [dispatch]);

  const subjectPanels = groupedDocuments.map((group: any) => (
    <Row fullwidth key={group[0].subjectId}>
      <Col>
        <ExpandablePanel title={group[0].subjectName}>
          <DocumentList documents={group} dispatch={dispatch} possibleToDelete />
        </ExpandablePanel>
      </Col>
    </Row>
  ));

  return (
    <>
      <Helmet>
        <title>{`${appName} - Все документы`}</title>
      </Helmet>
      <Loader loading />
      <Layout>
        <Content>{subjectPanels}</Content>
      </Layout>
    </>
  );
};
