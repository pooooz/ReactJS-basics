import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import { ChatList } from './ChatList';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('ChatList test', () => {
  const onAddChat = jest.fn();
  const onDeleteChat = jest.fn();
  it('Render component', () => {
    const history = createMemoryHistory();
    render(
      <Router location="/chats" navigator={history}>
        <ChatList
          chatList={[{ id: '1', name: 'initial' }]}
          onAddChat={onAddChat}
          onDeleteChat={onDeleteChat}
        />
      </Router>
    );
  });

  it('Adding a chat', () => {
    const history = createMemoryHistory();
    render(
      <Router location="/chats" navigator={history}>
        <ChatList
          chatList={[{ id: '1', name: 'initial' }]}
          onAddChat={onAddChat}
          onDeleteChat={onDeleteChat}
        />
      </Router>
    );
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: 'myChat' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Add chat/ }));
    expect(screen.getByText(/initial/)).toBeInTheDocument();
  });

  it('Deleting a chat', () => {
    const history = createMemoryHistory();
    render(
      <Router location="/chats" navigator={history}>
        <ChatList
          chatList={[{ id: '1', name: 'initial' }]}
          onAddChat={onAddChat}
          onDeleteChat={onDeleteChat}
        />
      </Router>
    );
    fireEvent.click(screen.getByRole('button', { name: /X/ }));
  });

  it('Adding an empty chat', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location="/chats" navigator={history}>
        <ChatList
          chatList={[{ id: '1', name: 'initial' }]}
          onAddChat={onAddChat}
          onDeleteChat={onDeleteChat}
        />
      </Router>
    );
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Add chat/ }));
    expect(asFragment()).toMatchSnapshot();
  });
});
