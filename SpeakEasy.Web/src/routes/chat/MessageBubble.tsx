import { Box, Paper, Typography } from "@mui/material";
import * as React from "react";

interface IProps {
  message: { user: string; message: string };
}

const MessageBubble = (props: IProps) => {
  return (
    <Box>
      <Paper elevation={2} sx={{ color: "primary" }}>
        <Typography>{props.message.message}</Typography>
      </Paper>
      <Typography>{props.message.user}</Typography>
    </Box>
  );
};

export default MessageBubble;
