import * as React from "react";

import { NextPageWithLayout } from "models/common";
import { AdminLayout } from "components/common/layouts/AdminLayout";

const AdminDashboard: NextPageWithLayout = () => {
  return <>admin page</>;
};

AdminDashboard.Layout = AdminLayout;

export default AdminDashboard;
