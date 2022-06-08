import * as React from "react";

import { LayoutProps } from "models/common";
import AdminHeader from "components/common/headers/AdminHeader";

export const AdminLayout: React.FunctionComponent<LayoutProps> = ({
  children,
}) => (
  <div>
    <AdminHeader />
    {children}
  </div>
);
