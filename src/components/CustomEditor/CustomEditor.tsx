/* eslint-disable no-multi-str */
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styles from './CustomEditor.module.scss';

import { Editor } from '@tinymce/tinymce-react';
import { Panel } from '../Panel';
import { Row } from '../Row/Row';
import { Input } from '../Input';
import { postData } from '../../pages/Document/actions';

export const CustomEditor = () => {
  const dispatch = useDispatch();

  const [content, setContent] = useState('<p>Write something</p>');

  const onEditorChange = useCallback((content: any, editor: any) => {
    setContent(content);
  }, []);

  const [title, setTitle] = useState('');

  const onTitleChange = useCallback((value: string) => {
    setTitle(value);
  }, []);

  const [author, setAuthor] = useState('');

  const onAuthorChange = useCallback((value: string) => {
    setAuthor(value);
  }, []);

  const documentData = {
    title,
    author,
    content,
  }

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(postData(documentData));
    }, 30000);
    return () => clearInterval(interval);
  }, [dispatch, documentData]);

  return (
    <div className={styles.root}>
      <Panel className={styles.descriptionPanel}>
        <Row fullwidth>
          <Input placeholder="Title" value={title} onChange={onTitleChange} />
        </Row>
        <Row fullwidth>
          <Input placeholder="Author" value={author} onChange={onAuthorChange} />
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
