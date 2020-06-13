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
import { getDocumentList, createSubject } from './actions';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ExpandablePanel } from '../../components/ExpandablePanel';
import { Dropdown } from '../../components/Dropdown';
import { PanelHeader } from '../../components/Panel/PanelHeader';
import { PanelFooter } from '../../components/Panel/PanelFooter';

export const Home: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocumentList());
  }, [dispatch]);

  const onOpenCreateModal = useCallback(() => {
    setDocumentCreatingModalOpen(true);
    setTitle(`Новый документ ${new Date().toLocaleString()}`);
  }, []);

  const onDocumentCreate = useCallback(() => {
    dispatch(push(`${routes.DOCUMENT.path}/new`));
  }, [dispatch]);

  const options = ['ОЭВМиС', 'Культурология', 'История'];

  const [isDocumentCreatingModalOpen, setDocumentCreatingModalOpen] = useState(false);

  const [title, setTitle] = useState(`Новый документ ${new Date().toLocaleString()}`);

  const [isSubjectCreatingModalOpen, setSubjectCreatingModalOpen] = useState(false);

  const [subject, setSubject] = useState('');

  const onSubjectCreate = useCallback(() => {
    const subjectData = {
      name: subject,
    };

    dispatch(createSubject(subjectData));
    setSubject('');
    setSubjectCreatingModalOpen(false);
  }, [dispatch, subject]);

  const onOpenSubjectCreatingModal = useCallback(() => {
    setSubject('');
    setSubjectCreatingModalOpen(true);
  }, []);

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
              <Panel className={styles.panelButton} onClick={onOpenSubjectCreatingModal}>
                <Icon className={styles.panelButtonIcon} type="plus" />
                <span className={styles.panelButtonText}>Добавить дисциплину</span>
              </Panel>
            </Col>
          </Row>
          <Row fullwidth>
            <Col>
              <ExpandablePanel title="Документы">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor, ligula non pharetra eleifend,
                lectus ex ultricies nulla, eget lobortis justo mi eget ipsum. Etiam ultrices risus at arcu pellentesque
                lacinia. Duis euismod pellentesque mauris id porttitor. Nulla ultrices elit quis sapien commodo viverra.
                Proin egestas mollis lectus id congue. Curabitur quis tortor ut mi vestibulum mattis. Nullam accumsan
                enim at aliquam ultricies. Aliquam consequat lorem ut sodales dictum. In pulvinar nibh eu semper
                vehicula. Etiam dictum varius elit, ut maximus urna porttitor et. In bibendum dictum felis, at commodo
                metus placerat sed. Aenean fermentum aliquam eros, vitae cursus orci facilisis sit amet. Cras semper sed
                metus eget molestie. Maecenas ac accumsan ipsum. Suspendisse lobortis, lectus at volutpat hendrerit,
                felis leo sodales metus, a posuere tortor erat eget odio.
              </ExpandablePanel>
            </Col>
          </Row>
          <Row fullwidth>
            <Col>
              <ExpandablePanel title="Заметки">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor, ligula non pharetra eleifend,
                lectus ex ultricies nulla, eget lobortis justo mi eget ipsum. Etiam ultrices risus at arcu pellentesque
                lacinia. Duis euismod pellentesque mauris id porttitor. Nulla ultrices elit quis sapien commodo viverra.
                Proin egestas mollis lectus id congue. Curabitur quis tortor ut mi vestibulum mattis. Nullam accumsan
                enim at aliquam ultricies. Aliquam consequat lorem ut sodales dictum. In pulvinar nibh eu semper
                vehicula. Etiam dictum varius elit, ut maximus urna porttitor et. In bibendum dictum felis, at commodo
                metus placerat sed. Aenean fermentum aliquam eros, vitae cursus orci facilisis sit amet. Cras semper sed
                metus eget molestie. Maecenas ac accumsan ipsum. Suspendisse lobortis, lectus at volutpat hendrerit,
                felis leo sodales metus, a posuere tortor erat eget odio.
              </ExpandablePanel>
            </Col>
          </Row>
          <Row fullwidth>
            <Col>
              <ExpandablePanel title="Дисциплины" hasContent={false}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor, ligula non pharetra eleifend,
                lectus ex ultricies nulla, eget lobortis justo mi eget ipsum. Etiam ultrices risus at arcu pellentesque
                lacinia. Duis euismod pellentesque mauris id porttitor. Nulla ultrices elit quis sapien commodo viverra.
                Proin egestas mollis lectus id congue. Curabitur quis tortor ut mi vestibulum mattis. Nullam accumsan
                enim at aliquam ultricies. Aliquam consequat lorem ut sodales dictum. In pulvinar nibh eu semper
                vehicula. Etiam dictum varius elit, ut maximus urna porttitor et. In bibendum dictum felis, at commodo
                metus placerat sed. Aenean fermentum aliquam eros, vitae cursus orci facilisis sit amet. Cras semper sed
                metus eget molestie. Maecenas ac accumsan ipsum. Suspendisse lobortis, lectus at volutpat hendrerit,
                felis leo sodales metus, a posuere tortor erat eget odio.
              </ExpandablePanel>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Modal isOpen={isDocumentCreatingModalOpen} onClose={() => setDocumentCreatingModalOpen(false)}>
        <Panel className={styles.createDocumentPanel}>
          <PanelHeader>
            <span>Новый документ</span>
          </PanelHeader>
          <Row fullwidth>
            <Input
              className={styles.titleInput}
              placeholder="Введите название..."
              value={title}
              onValueChange={(title) => setTitle(title)}
            />
          </Row>
          <Row fullwidth>
            <Dropdown options={options} placeholder="Выберите дисциплину" />
          </Row>
          <PanelFooter>
            <Button className={styles.button} onClick={() => setDocumentCreatingModalOpen(false)}>
              ◀ Отмена
            </Button>
            <Button className={styles.button} onClick={onDocumentCreate}>
              Создать ▶
            </Button>
          </PanelFooter>
        </Panel>
      </Modal>
      <Modal isOpen={isSubjectCreatingModalOpen} onClose={() => setSubjectCreatingModalOpen(false)}>
        <Panel className={styles.createDocumentPanel}>
          <PanelHeader>
            <span>Новая дисциплина</span>
          </PanelHeader>
          <Row fullwidth>
            <form onSubmit={onSubjectCreate}>
              <Input
                className={styles.titleInput}
                placeholder="Введите название..."
                value={subject}
                onValueChange={(subject) => setSubject(subject)}
                type="submit"
              />
            </form>
          </Row>
          <PanelFooter>
            <Button className={styles.button} onClick={() => setSubjectCreatingModalOpen(false)}>
              ◀ Отмена
            </Button>
            <Button className={styles.button} onClick={onSubjectCreate}>
              Создать ▶
            </Button>
          </PanelFooter>
        </Panel>
      </Modal>
    </>
  );
};
