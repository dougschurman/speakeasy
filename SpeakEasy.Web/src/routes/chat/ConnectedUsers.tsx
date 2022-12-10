import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import * as React from "react";

interface IProps {
  users: string[];
}

const ConnectedUsers = (props: IProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Tooltip title="Users">
        <IconButton
          onClick={() => setOpen(!open)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PeopleAltIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={() => setOpen(!open)}>
        <DialogTitle>
          <Typography display="flex" justifyContent="center" fontSize="18px">
            Users
          </Typography>
          <Divider sx={{ width: "100%" }} />
        </DialogTitle>
        <DialogContent>
          <Box>
            {props.users.map((user: string, index) => (
              <Paper
                key={index}
                elevation={2}
                sx={{
                  color: "primary",
                  borderRadius: "16px",
                  backgroundColor: "#90caf9 !important",
                  minHeight: "32px",
                  maxWidth: "300px",
                  padding: "4px 10px 4px 10px",
                  mb: 1,
                }}
              >
                <Typography color="black">{user}</Typography>
              </Paper>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConnectedUsers;
