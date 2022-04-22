import React, { useState, FC } from 'react';
import { Button, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { MessageListPure } from './components/MessageList/MessageList';
import { Input } from './components/Input/Input';

import { MessageInterface } from 'src/App';

import styles from './Chat.module.scss';

const theme = createTheme({
  typography: {
    fontFamily: 'Press Start 2P',
  },
});

interface ChatProps {
  addMessage: (a: string) => void;
  messages: MessageInterface[];
}

export const Chat: FC<ChatProps> = (props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    if (inputValue) {
      props.addMessage(inputValue);
      setInputValue('');
    }
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <section className={styles.dialogue}>
        <MessageListPure messages={props.messages} />
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input value={inputValue} change={handleChange} />
          <Button
            className={styles.form__button}
            type="submit"
            style={{
              width: '100px',
              fontFamily: 'Press Start 2P',
              color: '#32CD32FF',
            }}
          >
            Send
          </Button>
        </form>
      </section>
    </ThemeProvider>
  );
};
