import React from 'react';
import { ThemeProvider } from '@mui/material';
import Container from '@components/Container';
import theme from './theme';

function App() {
  return (
    <div className="App" data-testid="app">
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    </div>
  );
}

export default App;
