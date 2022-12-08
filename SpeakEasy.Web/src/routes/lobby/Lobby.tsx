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
}

const Lobby = (props: IProps) => {
  const [user, setUser] = React.useState<string>(null);
  const [room, setRoom] = React.useState<string>(null);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.joinRoom(user, room);
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
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <TextField
            label="Room Code"
            variant="outlined"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" disabled={!user || !room}>
            <Typography>Join</Typography>
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Lobby;
