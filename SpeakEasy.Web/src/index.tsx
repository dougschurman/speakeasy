import { CssBaseline, responsiveFontSizes } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import { themeConfig } from "../theme.config";
import Root from "./routes/index";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Root />
      </CssBaseline>
    </ThemeProvider>
  );
};

const theme = responsiveFontSizes(
  createTheme({
    palette: themeConfig.palette,
    typography: themeConfig.typography,
  })
);

ReactDOM.render(<App />, document.getElementById("mountNode"));
