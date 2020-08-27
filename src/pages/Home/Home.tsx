import React, { useCallback, useState } from 'react';
import { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Option } from 'react-dropdown';
import { Helmet } from 'react-helmet';

import { Layout } from '../../components/Layout';
import { Panel } from '../../components/Panel';
import { Content } from '../../components/Layout/Content';
import { Icon } from '../../components/Icon';
import { Row, Col } from '../../components/Row';
import { Loader } from '../../components/Loader';

import styles from './Home.module.scss';
import { getDocumentList, createSubject, getSubjectList, createDocument, createNote, getNoteList } from './actions';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ExpandablePanel } from '../../components/ExpandablePanel';
import { Dropdown } from '../../components/Dropdown';
import { PanelHeader } from '../../components/Panel/PanelHeader';
import { PanelFooter } from '../../components/Panel/PanelFooter';
import { homeSelector } from './reducer';
import { SubjectList } from '../../components/SubjectList';
import { DocumentList } from '../../components/DocumentList';
import { appSelector } from '../../App/reducer';
import { Textarea } from '../../components/Textarea';
import { NoteList } from '../../components/NoteList';

export const Home: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  const {
    config: { appName },
  } = useSelector(appSelector);
  const { subjectlist, documentList, noteList } = useSelector(homeSelector);

  useEffect(() => {
    dispatch(getDocumentList(5));
    dispatch(getSubjectList());
    dispatch(getNoteList());
  }, [dispatch]);

  const subjectDropdownOptions: Option[] = subjectlist.map((subject) => ({
    value: subject._id,
    label: subject.name,
  }));

  const [subjectForDocument, setSubjectForDocument] = useState(subjectDropdownOptions[0]);

  const [isDocumentCreatingModalOpen, setDocumentCreatingModalOpen] = useState(false);

  const [title, setTitle] = useState(`Новый документ ${new Date().toLocaleString()}`);

  const [isSubjectCreatingModalOpen, setSubjectCreatingModalOpen] = useState(false);

  const [subject, setSubject] = useState('');

  const onSubjectCreate = useCallback(() => {
    if (!subject) {
      return;
    }

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

  const onOpenDocumentCreatingModal = useCallback(() => {
    setDocumentCreatingModalOpen(true);
    setTitle(`Новый документ ${new Date().toLocaleString()}`);
  }, []);

  const onDocumentCreate = useCallback(() => {
    if (!subjectForDocument || !subjectForDocument.value) {
      return;
    }

    const documentData = {
      name: title,
      subjectId: subjectForDocument.value,
      subjectName: subjectForDocument.label,
      content: '',
    };

    dispatch(createDocument(documentData, '<p>text</p>'));
  }, [dispatch, subjectForDocument, title]);

  const [noteName, setNoteName] = useState(`Заметка ${new Date().toLocaleString()}`);
  const [noteText, setNoteText] = useState('');

  const [isNoteCreatingModalOpen, setNoteCreatingModalOpen] = useState(false);

  const onNoteCreate = useCallback(() => {
    if (!noteName || !noteText) {
      return;
    }

    const noteData = {
      name: noteName,
      content: noteText,
    };

    dispatch(createNote(noteData));
    setNoteName('');
    setNoteText('');
    setNoteCreatingModalOpen(false);
  }, [dispatch, noteName, noteText]);

  const onOpenNoteCreatingModal = useCallback(() => {
    setNoteName(`Заметка ${new Date().toLocaleString()}`);
    setNoteCreatingModalOpen(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${appName} - Редактор конспектов`}</title>
      </Helmet>
      <Loader loading />
      <Layout>
        <Content>
          <Row fullwidth>
            <Col col={4}>
              <Panel className={styles.panelButton} onClick={onOpenDocumentCreatingModal}>
                <Icon className={styles.panelButtonIcon} type="file" />
                <span className={styles.panelButtonText}>Новый документ</span>
              </Panel>
            </Col>
            <Col col={4}>
              <Panel className={styles.panelButton} onClick={onOpenNoteCreatingModal}>
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
              <ExpandablePanel
                title="Последние документы"
                hasContent={!!documentList.length}
                hasBeenOpened={!!documentList.length}
              >
                <DocumentList documents={documentList} dispatch={dispatch} showLinkToAll />
              </ExpandablePanel>
            </Col>
          </Row>
          <Row fullwidth>
            <Col>
              <ExpandablePanel title="Заметки" hasContent={!!noteList.length}>
                <NoteList notes={noteList} dispatch={dispatch} />
              </ExpandablePanel>
            </Col>
          </Row>
          <Row fullwidth>
            <Col>
              <ExpandablePanel title="Дисциплины" hasContent={!!subjectlist.length}>
                <SubjectList subjects={subjectlist} dispatch={dispatch} />
              </ExpandablePanel>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Modal isOpen={isDocumentCreatingModalOpen} onClose={() => setDocumentCreatingModalOpen(false)}>
        <Panel className={styles.createDocumentPanel}>
          <PanelHeader justify="center">
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
            <Dropdown
              options={subjectDropdownOptions}
              placeholder="Выберите дисциплину"
              value={subjectForDocument}
              onChange={(subject) => setSubjectForDocument(subject)}
            />
          </Row>
          <PanelFooter>
            <Button className={styles.button} onClick={() => setDocumentCreatingModalOpen(false)}>
              ◀ Отмена
            </Button>
            {title && subjectForDocument && (
              <Button className={styles.button} onClick={onDocumentCreate}>
                Создать ▶
              </Button>
            )}
          </PanelFooter>
        </Panel>
      </Modal>
      <Modal isOpen={isSubjectCreatingModalOpen} onClose={() => setSubjectCreatingModalOpen(false)}>
        <Panel className={styles.createDocumentPanel}>
          <PanelHeader justify="center">
            <span>Новая дисциплина</span>
          </PanelHeader>
          <Row fullwidth>
            <form onSubmit={subject ? onSubjectCreate : undefined}>
              <Input
                className={styles.titleInput}
                placeholder="Введите название..."
                value={subject}
                onValueChange={(subject) => setSubject(subject)}
              />
            </form>
          </Row>
          <PanelFooter>
            <Button className={styles.button} onClick={() => setSubjectCreatingModalOpen(false)}>
              ◀ Отмена
            </Button>
            {subject && (
              <Button className={styles.button} onClick={onSubjectCreate}>
                Добавить ▶
              </Button>
            )}
          </PanelFooter>
        </Panel>
      </Modal>

      <Modal isOpen={isNoteCreatingModalOpen} onClose={() => setNoteCreatingModalOpen(false)}>
        <Panel className={styles.createDocumentPanel}>
          <PanelHeader justify="center">
            <span>Новая заметка</span>
          </PanelHeader>
          <Row fullwidth>
            <Input
              className={styles.titleInput}
              placeholder="Введите название..."
              value={noteName}
              onValueChange={(noteName) => setNoteName(noteName)}
            />
          </Row>
          <Row fullwidth>
            <Textarea value={noteText} onValueChange={setNoteText} />
          </Row>
          <PanelFooter>
            <Button className={styles.button} onClick={() => setNoteCreatingModalOpen(false)}>
              ◀ Отмена
            </Button>
            {noteName && noteText && (
              <Button className={styles.button} onClick={onNoteCreate}>
                Добавить ▶
              </Button>
            )}
          </PanelFooter>
        </Panel>
      </Modal>
    </>
  );
};
