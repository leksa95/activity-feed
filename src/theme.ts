import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4',
      light: '#33c9dc',
    },
    secondary: {
      main: '#00bfa5',
      dark: '#33cbb7',
      contrastText: '#FFFFFF',
    },
  },
});

export default theme;
