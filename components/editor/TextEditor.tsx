import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
import { useState } from "react";

import { EditorProps } from "react-draft-wysiwyg";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function TextEditor() {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const handleEditorStateChange = (state: EditorState) => {
    setEditorState(state);
    const result = draftToHtml(convertToRaw(state.getCurrentContent()));
    console.log(
      "🚀 ~ file: TextEditor.tsx ~ line 19 ~ handleEditorStateChange ~ result",
      result
    );

    // onChange(draftToHtml(convertToRaw(state.getCurrentContent())));
  };

  return (
    <Editor
      editorState={editorState}
      toolbarClassName="toolbar-class"
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      onEditorStateChange={handleEditorStateChange}
      // toolbarOnFocus
      toolbar={{
        options: [
          "inline",
          "blockType",
          "fontSize",
          "fontFamily",
          "list",
          "textAlign",
          "colorPicker",
          "link",
          "embedded",
          "emoji",
          "image",
          "history",
        ],
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
        image: {
          urlEnabled: true,
          uploadEnabled: true,
          // uploadCallback: this.uploadImageCallBack,
          previewImage: true,
          alt: { present: false, mandatory: false },
        },
      }}
    />
  );
}
