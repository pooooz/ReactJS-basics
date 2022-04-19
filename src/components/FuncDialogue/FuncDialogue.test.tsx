import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { FuncDialogue } from './FuncDialogue';

describe('FuncDialogue', () => {
  it('Render component', () => {
    render(<FuncDialogue />);
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(<FuncDialogue />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Input test', () => {
    render(<FuncDialogue />);
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: 'Test' },
    });
    expect(screen.getByRole('textbox')).toContainHTML('Test');
  });

  it('Forming a message', () => {
    render(<FuncDialogue />);
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: 'Test' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/<You>/)).toBeInTheDocument();
  });

  it('Forming a empty message', () => {
    const { asFragment } = render(<FuncDialogue />);
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(asFragment()).toMatchSnapshot();
  });

  it('Bot answer', async () => {
    render(<FuncDialogue />);
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: 'Test' },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(
      () => {
        expect(screen.getByText(/\[BOT\] Message/)).toBeInTheDocument();
      },
      { timeout: 1600 }
    );
  });
});
