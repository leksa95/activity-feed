import React from 'react';
import { screen, render } from '@testing-library/react';
import Activity from '../index';
import { EVENT_TYPES_ENUM } from '@constants/index';

describe('Activity component', () => {
  it('should render activity', () => {
    const props = {
      activity: {
        id: '1',
        label: <span>mockLabel</span>,
        description: 'mockDescription',
        type: EVENT_TYPES_ENUM.MESSAGE,
        createdAt: new Date(),
      },
      handleRemoveActivity: jest.fn(),
    };
    render(<Activity {...props} />);

    const label = screen.getByText(/mockLabel/i);
    const description = screen.getByText(/mockDescription/i);
    const icon = screen.getByTestId('icon');
    const deleteIcon = screen.getByTestId('DeleteIcon');

    expect(label).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(deleteIcon).toBeInTheDocument();
  });
});
