import React, { FunctionComponent, useCallback, Dispatch } from 'react';
import { push } from 'connected-react-router';

import styles from './DocumentList.module.scss';

import { IDocument } from '../../models/document';
import { DocumentThumbnail } from '../DocumentThumbnail';
import { routes } from '../../App/routes';
import { Row } from '../Row';
import { CustomLink } from '../CustomLink';

export interface IDocumentListProps {
  dispatch: Dispatch<any>;
  documents: IDocument[];
}

export const DocumentList: FunctionComponent<IDocumentListProps> = ({ dispatch, documents }) => {
  const onDocumentClick = useCallback(
    (id: string) => {
      dispatch(push(`${routes.DOCUMENT.path}/${id}`));
    },
    [dispatch]
  );

  return (
    <>
      {documents.map((document) => (
        <DocumentThumbnail key={document._id} document={document} onClick={() => onDocumentClick(document._id)} />
      ))}
      <Row fullwidth justify="center">
        <CustomLink className={styles.link} view="link" to={routes.DOCUMENT_LIST.path}>
          Все документы...
        </CustomLink>
      </Row>
    </>
  );
};
