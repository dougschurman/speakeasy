import { AppBar, Typography } from "@mui/material";
import * as React from "react";

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        mb: "20px",
        display: "flex",
        flexDirection: "row",
        padding: "4px 20px",
      }}
    >
      <Typography fontSize="36px">Speak</Typography>
      <Typography fontSize="36px" color="primary" fontWeight="bold">
        Easy
      </Typography>
    </AppBar>
  );
};

export default Header;
