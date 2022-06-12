import MainHeader from "components/common/layouts/main/Header";
import { LayoutProps } from "models/common";
import * as React from "react";

export const MainLayout: React.FunctionComponent<LayoutProps> = ({
  children,
}) => (
  <div>
    <MainHeader />
    {children}
  </div>
);
