import MainHeader from "components/common/headers/MainHeader";
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
