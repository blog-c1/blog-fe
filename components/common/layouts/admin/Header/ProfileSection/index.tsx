import { Avatar, Chip } from "@mui/material";
import styles from "styles/admin.module.scss";

import { IconLogout } from "@tabler/icons";

const ProfileSection = () => {
  return (
    <>
      <Chip
        className={`h-12 rounded-3xl ${styles.profile}`}
        icon={
          <Avatar
            src="https://berrydashboard.io/free/static/media/user-round.13b5a31b.svg"
            sx={{
              margin: "10px 0 10px 8px !important",
            }}
            color="inherit"
          />
        }
        label={
          <IconLogout
            stroke={1.5}
            size="1.5rem"
            className="text-[#2196f3] transform translate-y-1 cursor-pointer hover:text-white"
          />
        }
        variant="outlined"
        color="primary"
      />
    </>
  );
};

export default ProfileSection;
