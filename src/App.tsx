import React, { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { defaultContext, ThemeContext } from 'src/utils/ThemeContext';
import { Provider } from 'react-redux';

import { Sidebar } from './components/Sidebar/Sidebar';
import { Dialogue } from './pages/Dialogues/Dialogue';
import { ChatList } from './pages/Dialogues/components/ChatList/ChatList';
import { Profile } from 'src/pages/Profile/Profile';
import { store } from 'src/store';

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

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
                <Route index element={<ChatList />} />
                <Route path=":chatId" element={<Dialogue />} />
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
