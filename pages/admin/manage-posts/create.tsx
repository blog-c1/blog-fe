import * as React from "react";

import { NextPageWithLayout } from "models/common";
import { AdminLayout } from "components/common/layouts/admin";
import styles from "styles/admin.module.scss";
import RichTextEditor from "components/editor/RichTextEditor";

// import "font-awesome/css/font-awesome.css";

import FroalaEditor from "react-froala-wysiwyg";
import TextEditor from "components/editor/TextEditor";

const CreatePostPage: NextPageWithLayout = () => {
  return (
    <section className="bg-white rounded-lg">
      <h1 className={styles.addPostHeader}>Add a post</h1>
      <div className="h-full p-5">
        {/* <RichTextEditor /> */}
        {/* <FroalaEditor tag="textarea" /> */}
        <TextEditor />
      </div>
    </section>
  );
};

CreatePostPage.Layout = AdminLayout;

export default CreatePostPage;
