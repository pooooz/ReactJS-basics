import React, { FC, useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { defaultContext, ThemeContext } from 'src/utils/ThemeContext';
import { Provider } from 'react-redux';

import { Sidebar } from './components/Sidebar/Sidebar';
import { Dialogue } from './pages/Dialogues/Dialogue';
import { ChatList } from './pages/Dialogues/components/ChatList/ChatList';
import { Profile } from 'src/pages/Profile/Profile';
import { store } from 'src/store';

export interface ChatInterface {
  id: string;
  name: string;
}

export interface MessageInterface {
  id: string;
  author: string;
  value: string;
}

export interface Messages {
  [key: string]: MessageInterface[];
}

export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>({
    default: [{ id: '1', author: 'Admin', value: 'Initialization...' }],
  });
  const [theme, setTheme] = useState(defaultContext.theme);

  const chatList = useMemo(
    () =>
      Object.entries(messages).map((chat) => ({
        id: nanoid(),
        name: chat[0],
      })),
    [Object.entries(messages).length]
  );

  const onAddChat = (chat: ChatInterface) => {
    if (!messages[chat.name]) {
      setMessages({
        ...messages,
        [chat.name]: [],
      });
    }
  };

  const onDeleteChat = (chatName: string) => {
    const newMessages: Messages = { ...messages };
    delete newMessages[chatName];

    setMessages({
      ...newMessages,
    });
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sidebar />}>
              <Route path="profile" element={<Profile />} />
              <Route path="chats">
                <Route
                  index
                  element={
                    <ChatList
                      chatList={chatList}
                      onAddChat={onAddChat}
                      onDeleteChat={onDeleteChat}
                    />
                  }
                />
                <Route
                  path=":chatId"
                  element={
                    <Dialogue
                      messages={messages}
                      setMessages={setMessages}
                      chatList={chatList}
                      onAddChat={onAddChat}
                      onDeleteChat={onDeleteChat}
                    />
                  }
                />
              </Route>
            </Route>

            <Route
              path="*"
              element={<h2 style={{ color: '#00BFFF' }}>404</h2>}
            />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  );
};
