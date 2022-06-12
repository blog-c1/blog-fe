import * as React from "react";

import { Box } from "@mui/material";
import AdminHeader from "components/common/layouts/admin/Header";
import { LayoutProps } from "models/common";

import { AppBar, CssBaseline, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Sidebar from "components/common/layouts/admin/Sidebar";

// assets

export const AdminLayout: React.FunctionComponent<LayoutProps> = ({
  children,
}) => {
  const theme = useTheme();

  return (
    <Box className="flex">
      <CssBaseline />
      {/* header */}
      <AppBar enableColorOnDark position="fixed" color="inherit" elevation={0}>
        <Toolbar>
          <AdminHeader />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar />

      {/* main content */}
      <main className="bg-[#e3f2fd] mr-5 grow rounded-xl mt-[88px] p-5">
        {children}
      </main>
    </Box>
  );
};
