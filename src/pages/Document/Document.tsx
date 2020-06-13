import React, { useState, useCallback, useEffect } from 'react';
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Document.module.scss';

import { Layout } from '../../components/Layout';
import { Loader } from '../../components/Loader';
import { CustomEditor } from '../../components/CustomEditor/CustomEditor';
import { updateDocument, getDocument, closeDocument } from './actions';
import { Input } from '../../components/Input';
import { documentSelector } from './reducer';

export interface IDocumentProps {
  id: string;
}

export const Document: FunctionComponent<IDocumentProps> = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocument(id));

    return () => {
      dispatch(closeDocument());
    };
  }, [dispatch, id]);

  const {
    entry: { name, content },
  } = useSelector(documentSelector);

  const [documentContent, setDocumentContent] = useState(content);

  const onEditorChange = useCallback((content: any, editor: any) => {
    setDocumentContent(content);
  }, []);

  const [documentName, setDocumentName] = useState(name);

  useEffect(() => {
    setDocumentName(name);
    setDocumentContent(content);
  }, [content, name]);

  const onNameChange = useCallback((value: string) => {
    setDocumentName(value);
  }, []);

  const documentData = {
    name: documentName,
    content: documentContent,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateDocument(id, documentData));
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch, documentData, id]);

  const documentTitle = <Input value={documentName} onValueChange={onNameChange} className={styles.nameInput} />;

  return (
    <>
      <Loader loading />
      <Layout headerChildren={documentTitle}>
        {documentContent !== undefined && <CustomEditor onChange={onEditorChange} content={documentContent} />}
      </Layout>
    </>
  );
};
