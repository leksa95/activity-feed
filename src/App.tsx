import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    </div>
  );
}

export default App;
