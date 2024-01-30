import React from 'react';
import { screen, render } from '@testing-library/react';
import Icon from '../index';
import { EVENT_TYPES_ENUM } from '@constants/index';

describe('Icon component', () => {
  it('should render icon', () => {
    const props = {
      type: EVENT_TYPES_ENUM.MESSAGE,
      onClick: jest.fn(),
    };
    render(<Icon {...props} />);

    const icon = screen.getByTestId('icon');

    expect(icon).toBeInTheDocument();
  });
});
