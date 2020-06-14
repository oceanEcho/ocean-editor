import React, { FunctionComponent, Dispatch, useCallback, useState } from 'react';

import styles from './NoteList.module.scss';

import { NoteThumbnail } from '../NoteThumbnail/NoteThumbnail';
import { INote } from '../../models/note';
import { Row, Col } from '../Row';
import { deleteNote, updateNote } from '../../pages/Home/actions';
import { Modal } from '../Modal';
import { Panel } from '../Panel';
import { PanelHeader } from '../Panel/PanelHeader';
import { Input } from '../Input';
import { PanelFooter } from '../Panel/PanelFooter';
import { Button } from '../Button';
import { Textarea } from '../Textarea';

export interface INoteListProps {
  dispatch: Dispatch<any>;
  notes: INote[];
}

export const NoteList: FunctionComponent<INoteListProps> = ({ dispatch, notes }) => {
  const [isNoteEditingModalOpen, setNoteEditingModalOpen] = useState(false);

  const [noteId, setNoteId] = useState('');
  const [noteName, setNoteName] = useState('');
  const [noteText, setNoteText] = useState('');

  const onNoteDelete = useCallback(
    (id: string) => {
      dispatch(deleteNote(id));
    },
    [dispatch]
  );

  const onNoteEdit = useCallback((note: INote) => {
    const { _id, name, content } = note;

    setNoteId(_id);
    setNoteName(name);
    setNoteText(content);
    setNoteEditingModalOpen(true);
  }, []);

  const onNoteUpdate = useCallback(
    (id: string) => {
      const noteData = {
        name: noteName,
        content: noteText,
      };

      dispatch(updateNote(id, noteData));
      setNoteEditingModalOpen(false);
    },
    [dispatch, noteName, noteText]
  );

  return (
    <>
      <Row fullwidth>
        {notes.map((note) => {
          const { _id } = note;
          return (
            <Col col={4} key={_id}>
              <NoteThumbnail note={note} onDelete={() => onNoteDelete(_id)} onEdit={() => onNoteEdit(note)} />
            </Col>
          );
        })}
      </Row>
      <Modal isOpen={isNoteEditingModalOpen} onClose={() => setNoteEditingModalOpen(false)}>
        <Panel className={styles.createDocumentPanel}>
          <PanelHeader justify="center">
            <Input
              className={styles.titleInput}
              placeholder="Введите название..."
              value={noteName}
              onValueChange={(noteName) => setNoteName(noteName)}
            />
          </PanelHeader>
          <Row fullwidth>
            <Textarea value={noteText} onValueChange={setNoteText} />
          </Row>
          <PanelFooter>
            <Button className={styles.button} onClick={() => setNoteEditingModalOpen(false)}>
              ◀ Отмена
            </Button>
            {noteName && noteText && (
              <Button className={styles.button} onClick={() => onNoteUpdate(noteId)}>
                Сохранить ▶
              </Button>
            )}
          </PanelFooter>
        </Panel>
      </Modal>
    </>
  );
};
