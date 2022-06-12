import * as React from "react";

import { NextPageWithLayout } from "models/common";
import { AdminLayout } from "components/common/layouts/admin";
import styles from "styles/admin.module.scss";
import RichTextEditor from "components/editor/RichTextEditor";

const CreatePostPage: NextPageWithLayout = () => {
  return (
    <section className="bg-white rounded-lg">
      <h1 className={styles.addPostHeader}>Add a post</h1>
      <div className="h-screen p-5">
        <RichTextEditor />
      </div>
    </section>
  );
};

CreatePostPage.Layout = AdminLayout;

export default CreatePostPage;
