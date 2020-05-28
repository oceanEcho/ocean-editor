/* eslint-disable no-multi-str */
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styles from './CustomEditor.module.scss';

import { Editor } from '@tinymce/tinymce-react';
import { Panel } from '../Panel';
import { Row } from '../Row/Row';
import { Input } from '../Input';
import { updateDocument } from '../../pages/Document/actions';

export const CustomEditor = () => {
  const dispatch = useDispatch();

  const [content, setContent] = useState('');

  const onEditorChange = useCallback((content: any, editor: any) => {
    setContent(content);
  }, []);

  const [name, setName] = useState('');

  const onTitleChange = useCallback((value: string) => {
    setName(value);
  }, []);

  const [discipline, setDiscipline] = useState('');

  const onAuthorChange = useCallback((value: string) => {
    setDiscipline(value);
  }, []);

  const documentData = {
    name,
    discipline,
    content,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateDocument('5ecff4f6f3869f3aa82c1624', documentData));
    }, 10000);
    return () => clearInterval(interval);
  }, [dispatch, documentData]);

  return (
    <div className={styles.root}>
      <Panel className={styles.descriptionPanel}>
        <Row fullwidth>
          <Input placeholder="Название" value={name} onChange={onTitleChange} />
        </Row>
        <Row fullwidth>
          <Input placeholder="Дисциплина" value={discipline} onChange={onAuthorChange} />
        </Row>
      </Panel>
      <div className={styles.editor}>
        <Editor
          apiKey="evx2equdpjl541nvx870yvkmoxrxohte5hd7edmwhkmwljn1"
          initialValue={content}
          init={{
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount quickbars',
            ],
            toolbar: false,
            inline: true,
            quickbars_selection_toolbar:
              'bold italic underline | forecolor | formatselect | removeformat |`\
             `|alignleft aligncenter alignright alignjustify | quicklink blockquote',
          }}
          onEditorChange={onEditorChange}
        />
      </div>
    </div>
  );
};
