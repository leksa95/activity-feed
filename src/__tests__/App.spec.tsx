import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('should render app', () => {
    render(<App />);

    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
