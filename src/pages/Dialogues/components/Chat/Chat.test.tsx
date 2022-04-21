import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { Chat } from './Chat';

import { MessageInterface } from '../../../../App';

const initialMessages: MessageInterface[] = [
  {
    id: '1',
    author: 'Test',
    value: 'Test',
  },
];

const addMessage = jest.fn();

describe('Chat', () => {
  it('Render component', () => {
    render(<Chat addMessage={addMessage} messages={initialMessages} />);
  });

  it('Render with snapshot', () => {
    const { asFragment } = render(
      <Chat addMessage={addMessage} messages={initialMessages} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Input test', () => {
    render(<Chat addMessage={addMessage} messages={initialMessages} />);
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: 'Test' },
    });
    expect(screen.getByRole('textbox')).toContainHTML('Test');
  });

  it('Empty message test', () => {
    const { asFragment } = render(
      <Chat addMessage={addMessage} messages={initialMessages} />
    );
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(asFragment()).toMatchSnapshot();
  });

  it('Filled message test', () => {
    render(<Chat addMessage={addMessage} messages={initialMessages} />);
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: 'Test' },
    });
    fireEvent.click(screen.getByRole('button'));
  });
});
