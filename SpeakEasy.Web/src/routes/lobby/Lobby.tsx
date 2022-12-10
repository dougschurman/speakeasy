import {
  TextField,
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import * as React from "react";

interface IProps {
  joinRoom: (user: string, room: string) => void;
  user: string;
  setUser: (name: string) => void;
}

const Lobby = (props: IProps) => {
  const [room, setRoom] = React.useState<string>(null);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.joinRoom(props.user, room);
  };

  return (
    <Container>
      <Paper elevation={4}>
        <Box
          component="form"
          id="lobby"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContext: "center",
            flexDirection: "column",
            gap: "20px",
            padding: "20px 20px",
          }}
          onSubmit={handleSubmit}
        >
          <Typography fontSize="28px" color="primary">
            Join a Room
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <TextField
            label="Username"
            variant="outlined"
            type="text"
            onChange={(e) => props.setUser(e.target.value)}
            required
            autoComplete="off"
          />
          <TextField
            label="Room Code"
            variant="outlined"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
            required
            autoComplete="off"
          />
          <Button
            type="submit"
            variant="contained"
            disabled={!props.user || !room}
          >
            <Typography>Join</Typography>
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Lobby;
