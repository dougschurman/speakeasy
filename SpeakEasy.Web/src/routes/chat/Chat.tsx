import { Container, Paper } from "@mui/material";
import * as React from "react";
import MessageBubble from "./MessageBubble";

interface IProps {
  messages: { user: string; message: string }[];
}

const Chat = (props: IProps) => {
  return (
    <Container>
      <Paper elevation={4} sx={{ minHeight: "600px" }}>
        {props.messages.map((m, index) => {
          <React.Fragment key={index}>
            <MessageBubble message={m} />
          </React.Fragment>;
        })}
      </Paper>
    </Container>
  );
};

export default Chat;
