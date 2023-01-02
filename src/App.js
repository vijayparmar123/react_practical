import * as React from "react";

import { Provider } from "react-redux";
import "./App.css";
import Topbar from "./views/Topbar";
import ErrorBoundary from "./ErrorBoundary";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import store from "./redux/stores";

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
    <Provider store={store}>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        
          
            <Topbar></Topbar>
      </ThemeProvider>
    </ErrorBoundary>
    </Provider>
  );
}

export default App;
