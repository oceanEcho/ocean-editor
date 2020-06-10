import React, { useCallback, useState } from 'react';
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
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const Home: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocumentList());
  }, [dispatch]);

  const onOpenCreateModal = useCallback(() => {
    setDocumentCreatingModalOpen(true);
  }, []);

  const onDocumentCreate = useCallback(() => {
    dispatch(push(`${routes.DOCUMENT.path}/new`));
  }, [dispatch]);

  const [isDocumentCreatingModalOpen, setDocumentCreatingModalOpen] = useState(false);

  return (
    <>
      <Loader loading />
      <Layout>
        <Content>
          <Row fullwidth>
            <Col col={4}>
              <Panel className={styles.panelButton} onClick={onOpenCreateModal}>
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
        </Content>
      </Layout>
      <Modal isOpen={isDocumentCreatingModalOpen} onClose={() => setDocumentCreatingModalOpen(false)}>
        <Panel className={styles.panel}>
          <Content>
            <Row fullwidth>
              <Input placeholder="Введите дисциплину" />
            </Row>
            <Row fullwidth>
              <Input placeholder="Введите название" />
            </Row>
            <Row fullwidth>
              <Button className={styles.button} onClick={onDocumentCreate}>
                Создать →
              </Button>
            </Row>
          </Content>
        </Panel>
      </Modal>
    </>
  );
};
