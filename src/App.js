import * as React from "react";

import "./App.css";
import Topbar from "./views/Topbar";
import ErrorBoundary from "./ErrorBoundary";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins,sans-serif",
      textTransform: "none",
      fontSize: 16,
    },
  },
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        
          
            <Topbar></Topbar>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
