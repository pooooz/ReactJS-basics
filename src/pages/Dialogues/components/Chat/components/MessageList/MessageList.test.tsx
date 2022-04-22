import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MessageList } from './MessageList';

describe('MessageList', () => {
  it('Render component', () => {
    render(
      <MessageList
        messages={[{ id: '1', value: 'Render', author: 'Render' }]}
      />
    );
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(
      <MessageList
        messages={[{ id: '1', value: 'Render', author: 'Render' }]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render with text', () => {
    render(
      <MessageList
        messages={[{ id: '1', value: 'Render', author: 'Render' }]}
      />
    );
    expect(screen.getByText(/Author: <\w*>/));
  });
});
