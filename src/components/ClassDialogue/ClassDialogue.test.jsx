import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { ClassDialogue } from './ClassDialogue';

describe('ClassDialogue', () => {
  it('Render component', () => {
    render(<ClassDialogue />);
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(<ClassDialogue />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Input test', () => {
    render(<ClassDialogue />);
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: 'Test' },
    });
    expect(screen.getByRole('textbox')).toContainHTML('Test');
  });

  it('Forming a message', () => {
    render(<ClassDialogue />);
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: 'Test' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/<You>/)).toBeInTheDocument();
  });

  it('Forming a empty message', () => {
    const { asFragment } = render(<ClassDialogue />);
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(asFragment()).toMatchSnapshot();
  });

  it('Bot answer', async () => {
    render(<ClassDialogue />);
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: 'Test' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/\[BOT\] Message/)).toBeInTheDocument();
  });
});
