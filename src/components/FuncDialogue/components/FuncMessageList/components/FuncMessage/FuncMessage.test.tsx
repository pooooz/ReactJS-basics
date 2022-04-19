import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { FuncMessage } from './FuncMessage';

describe('FuncMessage', () => {
  it('Render component', () => {
    render(<FuncMessage message="Test" author="Test" />);
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(<FuncMessage message="Test" author="Test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render component with author', () => {
    render(<FuncMessage message="Test" author="Test" />);
    expect(screen.getByText(/Author: <\w*>/)).toBeInTheDocument();
  });
});
