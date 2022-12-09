import { Box, Paper, Typography } from "@mui/material";
import * as React from "react";
import { Message } from "..";

interface IProps {
  message: Message;
}

const MessageBubble = (props: IProps) => {
  return (
    <>
      <Paper elevation={2} sx={{ color: "primary" }}>
        <Typography>{props.message.text}</Typography>
      </Paper>
      <Typography>{props.message.user}</Typography>
    </>
  );
};

export default MessageBubble;
