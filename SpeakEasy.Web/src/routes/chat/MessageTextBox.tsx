import { Box, IconButton, TextField } from "@mui/material";
import * as React from "react";
import SendIcon from "@mui/icons-material/Send";

interface IProps {
  sendMessage: (message: string) => void;
}

const SendMessageTextBox = (props: IProps) => {
  const [message, setMessage] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.sendMessage(message);
    setMessage("");
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        left: "20px",
        right: "20px",
      }}
    >
      <TextField
        sx={{ width: "100%", padding: "0px 5px 0px 0px" }}
        variant="outlined"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></TextField>
      <IconButton type="submit" disabled={!message}>
        <SendIcon fontSize="large" sx={{ ml: 1 }} />
      </IconButton>
    </Box>
  );
};

export default SendMessageTextBox;
