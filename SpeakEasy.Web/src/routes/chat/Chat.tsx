import { Box, Container, IconButton, Paper } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import * as React from "react";
import { Message } from "..";
import ConnectedUsers from "./ConnectedUsers";
import MessageBubble from "./MessageBubble";
import MessageTextBox from "./MessageTextBox";

interface IProps {
  messages: Message[];
  sendMessage: (message: string) => void;
  users: string[];
}

const Chat = (props: IProps) => {
  const messageRef = React.useRef<null | HTMLDivElement>(null);
  const classes = useStyles();

  React.useEffect(() => {
    if (messageRef && messageRef.current) {
      const { scrollHeight, clientHeight } = messageRef.current;
      messageRef.current.scrollTo({
        left: 0,
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  }, [props.messages]);
  return (
    <Container>
      <Paper
        elevation={4}
        sx={{ height: "89vh", padding: "20px 20px", position: "relative" }}
      >
        <Box
          sx={{ padding: "0px 0px 60px 0px", width: "100%", height: "100%" }}
          className={classes.container}
        >
          {props.messages.map((m, index) => (
            <div ref={messageRef} key={index}>
              <MessageBubble message={m} />
            </div>
          ))}
        </Box>
        <MessageTextBox sendMessage={props.sendMessage} />
      </Paper>
      <ConnectedUsers users={props.users} />
    </Container>
  );
};

export default Chat;

const useStyles = makeStyles({
  container: {
    // paddingBottom: "4px",
    // display: "flex",
    // flexDirection: "column",
    // width: "100%",
    // height: "calc(100vh - 168px)",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "rgba(0, 0, 0, 0.2)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
  },
});
