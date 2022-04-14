import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { FuncMessage } from './FuncMessage';

describe('FuncMessage', () => {
  it('Render component', () => {
    render(<FuncMessage />);
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(<FuncMessage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render component with author', () => {
    render(<FuncMessage author="Me" />);
    expect(screen.getByText(/Author: <\w*>/)).toBeInTheDocument();
  });
});
