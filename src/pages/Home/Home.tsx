import React, { useCallback } from 'react';
import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { Layout } from '../../components/Layout';
import { Panel } from '../../components/Panel';
import { Content } from '../../components/Layout/Content';
import { routes } from '../../App/routes';
import { Icon } from '../../components/Icon';
import { Row, Col } from '../../components/Row';
import { Loader } from '../../components/Loader';

import styles from './Home.module.scss';
import { getDocumentList } from './actions';

export const Home: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocumentList());
  }, [dispatch]);

  const onDocumentCreate = useCallback(() => {
    dispatch(push(`${routes.DOCUMENT.path}/new`));
  }, [dispatch]);

  return (
    <>
      <Loader loading />
      <Layout>
        <Content>
          <Row fullwidth>
            <Col col={4}>
              <Panel className={styles.panelButton} onClick={onDocumentCreate}>
                <Icon className={styles.panelButtonIcon} type="file" />
                <span className={styles.panelButtonText}>Новый документ</span>
              </Panel>
            </Col>
            <Col col={4}>
              <Panel className={styles.panelButton}>
                <Icon className={styles.panelButtonIcon} type="edit" />
                <span className={styles.panelButtonText}>Новая заметка</span>
              </Panel>
            </Col>
            <Col col={4}>
              <Panel className={styles.panelButton}>
                <Icon className={styles.panelButtonIcon} type="plus" />
                <span className={styles.panelButtonText}>Добавить дисциплину</span>
              </Panel>
            </Col>
          </Row>
          <Row fullwidth>
            <Col>
              <Panel className={styles.panel}>
                Velit nostrud ea adipisicing in minim do proident excepteur. Nostrud excepteur in ad laborum adipisicing
                Lorem proident commodo. Officia nulla veniam ut nisi esse laborum ut laboris nulla labore id nulla. Et
                Lorem ipsum voluptate magna voluptate dolor et. Ex sunt sit sint sit sit do dolore occaecat in eu nulla
                exercitation pariatur. Ipsum consectetur ipsum ex amet. Sit voluptate sunt ullamco irure esse voluptate
                nisi. Laborum esse deserunt dolor aliqua amet nulla laboris laboris anim duis quis veniam. Deserunt anim
                ut irure ex sunt ut. Ex aliqua in amet cupidatat quis do laborum. Ipsum ex anim labore sunt id
                consectetur consequat. Dolor occaecat consectetur culpa exercitation incididunt minim laboris qui
                incididunt irure velit exercitation amet. Reprehenderit laboris consequat fugiat anim sint irure irure
                nostrud occaecat. Aliqua veniam ad sunt laborum eu consequat laborum ut sint nostrud adipisicing. Et
                nisi ex dolor minim incididunt et. Qui ex esse officia ex duis elit aliquip velit veniam tempor in
                incididunt. Laboris eiusmod irure laborum commodo consequat magna anim proident nisi qui sunt aliqua.
                Nulla aliqua ex mollit ad esse adipisicing dolore dolore ipsum proident exercitation mollit laborum
                duis. Lorem non pariatur dolor labore est labore amet in non fugiat eiusmod et eu.
              </Panel>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};
