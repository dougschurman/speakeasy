import { Box, Paper, Typography } from "@mui/material";
import * as React from "react";
import { Message } from "..";

interface IProps {
  message: Message;
  currentUser: string;
}

const MessageBubble = (props: IProps) => {
  return (
    <>
      <Paper
        elevation={2}
        sx={{
          color: "primary",
          display: "inline-block",
          overflowWrap: "break-word",
          borderRadius: "16px",
          backgroundColor:
            props.currentUser == props.message.user
              ? "#90caf9 !important"
              : "#d3d3d3 !important",
          minHeight: "32px",
          maxWidth: "300px",
          padding: "4px 10px 4px 10px",
          mr: props.currentUser == props.message.user ? "12px" : "",
        }}
      >
        <Typography color="black">{props.message.text}</Typography>
      </Paper>
      <Typography
        fontSize="14px"
        sx={{
          margin:
            props.currentUser == props.message.user
              ? "0px 22px 0px 0px"
              : "0px 0px 0px 10px",
        }}
      >
        {props.message.user}
      </Typography>
    </>
  );
};

export default MessageBubble;
