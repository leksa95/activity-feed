import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('mock test', () => {
  render(<App />);
  expect(true).toBeTruthy();
});
