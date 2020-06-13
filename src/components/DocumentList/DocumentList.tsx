import React, { FunctionComponent, useCallback, Dispatch } from 'react';
import { push } from 'connected-react-router';

import { IDocument } from '../../models/document';
import { DocumentThumbnail } from '../DocumentThumbnail';
import { routes } from '../../App/routes';

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
    </>
  );
};
