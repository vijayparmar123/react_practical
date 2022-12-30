import * as React from 'react';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from './logo.svg';
import './App.css';
import { AppBar, Box } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
      </Toolbar>
      </AppBar>
      </Box>  
    </ThemeProvider>
  );
}

export default App;
