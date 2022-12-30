import * as React from 'react';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from './logo.svg';
import './App.css';
import { AppBar, Box } from '@mui/material';

import Toolbar from '@mui/material/Toolbar';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">

      <Toolbar>

      </Toolbar>
      </AppBar>
      </Box>  
    </ThemeProvider>
  );
}

export default App;
