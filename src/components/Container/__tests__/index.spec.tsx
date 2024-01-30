import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Container from '../index';

describe('Container component', () => {
  it('should render title', () => {
    render(<Container />);

    const title = screen.getByText(/activity feed/i);

    expect(title).toBeInTheDocument();
  });

  it('should render create activity component', () => {
    render(<Container />);

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

  it('activities should be empty', () => {
    render(<Container />);

    const activities = screen.queryAllByTestId('activity');

    expect(activities.length).toBe(0);
  });

  it.only('add activity', () => {
    render(<Container />);

    const textField = screen.getByPlaceholderText(
      /add a note about/i,
    ) as HTMLInputElement;
    const submitButton = screen.getByText(/submit/i);

    expect(screen.queryAllByTestId('activity').length).toBe(0);
    fireEvent.change(textField, { target: { value: 'mockActivity' } });
    expect(textField.value).toBe('mockActivity');
    fireEvent.click(submitButton);
    expect(screen.queryAllByTestId('activity').length).toBe(1);
  });

  it('remove activity', () => {
    render(<Container />);

    const textField = screen.getByPlaceholderText(
      /add a note about/i,
    ) as HTMLInputElement;
    const submitButton = screen.getByText(/submit/i);

    expect(screen.queryAllByTestId('activity').length).toBe(0);
    fireEvent.change(textField, { target: { value: 'mockActivity' } });
    expect(textField.value).toBe('mockActivity');
    fireEvent.click(submitButton);
    expect(screen.queryAllByTestId('activity').length).toBe(1);
    fireEvent.click(screen.getByTestId('DeleteIcon'));
    expect(screen.queryAllByTestId('activity').length).toBe(0);
  });
});
