import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('FuncInput', () => {
  it('Render component', () => {
    render(<Input />);
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Multiple render', () => {
    render(
      <>
        <Input />
        <Input />
      </>
    );
    expect(screen.getAllByRole('textbox').length).toBe(2);
  });

  it('Render with value and change handler', () => {
    render(<Input />);
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: 'message' },
    });
    expect(screen.getByDisplayValue(/message/)).toBeInTheDocument();
  });
});
