import React from 'react';
import { screen, render } from '@testing-library/react';
import CreateActivity from '../index';

describe('CreateActivity component', () => {
  it('should render create activity', () => {
    const props = {
      handleCreateActivity: jest.fn(),
    };
    render(<CreateActivity {...props} />);

    const textField = screen.getByPlaceholderText(/add a note about/i);
    const chatBubbleIcon = screen.getByTestId('ChatBubbleIcon');
    const phoneRoundedIcon = screen.getByTestId('PhoneRoundedIcon');
    const freeBreakfastIcon = screen.getByTestId('FreeBreakfastIcon');
    const localBarRoundedIcon = screen.getByTestId('LocalBarRoundedIcon');
    const personRoundedIcon = screen.getByTestId('PersonRoundedIcon');
    const submitButton = screen.getByText(/submit/i);

    expect(textField).toBeInTheDocument();
    expect(chatBubbleIcon).toBeInTheDocument();
    expect(phoneRoundedIcon).toBeInTheDocument();
    expect(freeBreakfastIcon).toBeInTheDocument();
    expect(localBarRoundedIcon).toBeInTheDocument();
    expect(personRoundedIcon).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
