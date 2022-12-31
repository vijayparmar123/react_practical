import * as React from "react";

import "./App.css";
import Topbar from "./views/Topbar";
import ErrorBoundary from "./ErrorBoundary";
import { red } from "@mui/material/colors";
import { AppBar, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Topbar></Topbar>
          </AppBar>
        </Box>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
