import React, { useState, useCallback, useEffect } from 'react';
import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Document.module.scss';

import { Layout } from '../../components/Layout';
import { Loader } from '../../components/Loader';
import { CustomEditor } from '../../components/CustomEditor/CustomEditor';
import { updateDocument } from './actions';
import { Input } from '../../components/Input';

export const Document: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  const [content, setContent] = useState('');

  const onEditorChange = useCallback((content: any, editor: any) => {
    setContent(content);
  }, []);

  const [title, setTitle] = useState('Дисциплина: Новый документ ' + new Date().toLocaleString());

  const onTitleChange = useCallback((value: string) => {
    setTitle(value);
  }, []);

  // const [discipline, setDiscipline] = useState('');

  // const onAuthorChange = useCallback((value: string) => {
  //   setDiscipline(value);
  // }, []);

  const documentData = {
    title,
    // discipline,
    content,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateDocument('5ecff4f6f3869f3aa82c1624', documentData));
    }, 10000);
    return () => clearInterval(interval);
  }, [dispatch, documentData]);

  const documentTitle = <Input value={title} onChange={onTitleChange} className={styles.titleInput} />;

  return (
    <>
      <Loader loading />
      <Layout headerChildren={documentTitle}>
        <CustomEditor onChange={onEditorChange} content={content} />
      </Layout>
    </>
  );
};
