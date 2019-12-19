import React from "react";
import { Editor, EditorState } from "draft-js";

import styles from "./CustomEditor.module.scss";

export const CustomEditor = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  return (
    <div className={styles.editor}>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};
