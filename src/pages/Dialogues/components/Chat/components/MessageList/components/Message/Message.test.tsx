import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Message } from './Message';

describe('Message', () => {
  it('Render component', () => {
    render(<Message message="Test" author="Test" />);
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(<Message message="Test" author="Test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render component with author', () => {
    render(<Message message="Test" author="Test" />);
    expect(screen.getByText(/Author: <\w*>/)).toBeInTheDocument();
  });
});
