import { Avatar, Box, ButtonBase } from "@mui/material";
import LogoSection from "components/common/layouts/admin/LogoSection";
import React from "react";
import { IconMenu2 } from "@tabler/icons";
import styles from "styles/admin.module.scss";
import NotificationSection from "components/common/layouts/admin/Header/NotificationSection";
import ProfileSection from "components/common/layouts/admin/Header/ProfileSection";

const AdminHeader: React.FC<React.PropsWithChildren> = () => {
  return (
    <header className="w-full flex items-center justify-between py-5">
      {/* logo & toggler button */}
      <Box className="w-auto md:w-[228px] flex justify-between items-center">
        <Box component="span" className="hidden md:block flex-grow-1">
          <LogoSection />
        </Box>
        <ButtonBase>
          <Avatar
            variant="rounded"
            className={`w-8 h-8 rounded-lg ${styles.header}`}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* notification & profile */}
      <NotificationSection />
      <ProfileSection />
    </header>
  );
};

export default AdminHeader;
