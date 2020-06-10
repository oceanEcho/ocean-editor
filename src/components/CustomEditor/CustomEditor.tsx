/* eslint-disable no-multi-str */
import React, { FunctionComponent } from 'react';

import styles from './CustomEditor.module.scss';

import { Editor } from '@tinymce/tinymce-react';

export interface ICustomEditorProps {
  onChange?: (value: string, editor: any) => void;
  content: string;
}

export const CustomEditor: FunctionComponent<ICustomEditorProps> = ({ onChange, content }) => {
  return (
    <div className={styles.root}>
      <div className={styles.editor}>
        <Editor
          apiKey="evx2equdpjl541nvx870yvkmoxrxohte5hd7edmwhkmwljn1"
          initialValue={content}
          init={{
            language: 'ru',
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'media table paste wordcount quickbars',
            ],
            toolbar: false,
            inline: true,
            quickbars_selection_toolbar:
              'bold italic underline | forecolor | formatselect | removeformat |`\
             `|alignleft aligncenter alignright alignjustify | quicklink blockquote',
            contextmenu: false,
          }}
          onEditorChange={onChange}
        />
      </div>
    </div>
  );
};
