import { HubConnection } from "@microsoft/signalr";
import { AppBar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import * as React from "react";
import ConnectedUsers from "./chat/ConnectedUsers";

interface IProps {
  closeConnection: () => Promise<void>;
  connection: HubConnection;
  users: string[];
}

const Header = (props: IProps) => {
  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        mb: "20px",
        display: "flex",
        flexDirection: "row",
        padding: "4px 20px",
        justifyContent: "space-between",
      }}
    >
      <Box display="flex">
        <Typography fontSize="36px">Speak</Typography>
        <Typography fontSize="36px" color="primary" fontWeight="bold">
          Easy
        </Typography>
      </Box>
      {props.connection ? (
        <Box>
          <Tooltip title="Leave Room">
            <IconButton onClick={props.closeConnection} sx={{ float: "right" }}>
              <LogoutIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <ConnectedUsers users={props.users} />
        </Box>
      ) : null}
    </AppBar>
  );
};

export default Header;
