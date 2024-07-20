// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0259ab', 
    },
    secondary: {
      main: '#f2f5f7', 
    },
    table: {
      main: '#ebf5ff', 
    },
    cards:{
      main:"#0CC9E8"
    },
    pagination: {
      main: '#0ccbe8', 
    },
  },
});

export default theme;
