import { Box } from "@mui/material";
import * as React from "react";

interface IProps {
  users: string[];
}

const ConnectedUsers = (props: IProps) => {
  return (
    <Box>
      {props.users.map((user: string, index) => (
        <div key={index}>{user}</div>
      ))}
    </Box>
  );
};

export default ConnectedUsers;
