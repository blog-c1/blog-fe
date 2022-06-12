import { Avatar, Box, ButtonBase } from "@mui/material";
import styles from "styles/admin.module.scss";
import { IconBell } from "@tabler/icons";

const NotificationSection = () => {
  return (
    <>
      <Box className="ml-2 mr-3">
        <ButtonBase>
          <Avatar
            variant="rounded"
            className={`w-9 h-8 rounded-lg ${styles.header}`}
            color="inherit"
          >
            <IconBell stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>
    </>
  );
};

export default NotificationSection;
