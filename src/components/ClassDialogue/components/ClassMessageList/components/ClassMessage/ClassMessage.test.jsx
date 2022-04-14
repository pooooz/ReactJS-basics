import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ClassMessage } from './ClassMessage';

describe('ClassMessage', () => {
  it('Render component', () => {
    render(<ClassMessage />);
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(<ClassMessage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render component with author', () => {
    render(<ClassMessage author="Me" />);
    expect(screen.getByText(/Author: <\w*>/)).toBeInTheDocument();
  });
});
