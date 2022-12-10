import {
  Box,
  Container,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import * as React from "react";
import { Message } from "..";
import ConnectedUsers from "./ConnectedUsers";
import MessageBubble from "./MessageBubble";
import MessageTextBox from "./MessageTextBox";

interface IProps {
  messages: Message[];
  sendMessage: (message: string) => void;
  currentUser: string;
  room: string;
}

const Chat = (props: IProps) => {
  const messageRef = React.useRef<null | HTMLDivElement>(null);
  const classes = useStyles();

  React.useEffect(() => {
    messageRef.current.scrollIntoView({ behavior: "smooth" });
  }, [props.messages]);
  return (
    <Container>
      <Paper
        elevation={4}
        sx={{ height: "80vh", padding: "20px 20px", position: "relative" }}
      >
        <Typography
          fontSize="24px"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.room}
        </Typography>
        <Divider sx={{ width: "100%", mb: "8px" }} />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            maxHeight: "64vh",
          }}
          className={classes.container}
        >
          {props.messages.map((m, index) => (
            <div
              key={index}
              style={{
                marginBottom: "4px",
                textAlign: props.currentUser == m.user ? "right" : "left",
              }}
            >
              <MessageBubble message={m} currentUser={props.currentUser} />
            </div>
          ))}
          <span ref={messageRef} />
        </Box>
        <MessageTextBox sendMessage={props.sendMessage} />
      </Paper>
    </Container>
  );
};

export default Chat;

const useStyles = makeStyles({
  container: {
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "4px",
      height: "4px",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      borderRadius: "4px",
    },
  },
});
