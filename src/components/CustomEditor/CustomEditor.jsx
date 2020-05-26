/* eslint-disable no-multi-str */
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Panel } from '../Panel';

import styles from './CustomEditor.module.scss';
import { Row } from '../Row/Row';

export const CustomEditor = () => {
  const onEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  };

  return (
    <div className={styles.root}>
      <Panel className={styles.descriptionPanel}>
        <Row fullwidth>
          <div>Title</div>
        </Row>
        <Row fullwidth>
          <div>Author</div>
        </Row>
      </Panel>

      <div className={styles.editor}>
        <Editor
          apiKey="evx2equdpjl541nvx870yvkmoxrxohte5hd7edmwhkmwljn1"
          initialValue="<p>This is the initial content of the editor</p>"
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
