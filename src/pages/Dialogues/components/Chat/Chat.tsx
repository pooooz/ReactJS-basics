import React, { useState, FC } from 'react';
import { Button, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { MessageListPure } from './components/MessageList/MessageList';
import { WithClasses } from 'src/HOC/WithClasses';
import { Input } from 'src/components/Input/Input';

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

  const MessageListPureWithClass = WithClasses(MessageListPure);

  return (
    <ThemeProvider theme={theme}>
      <section className={styles.dialogue}>
        <MessageListPureWithClass
          messages={props.messages}
          classes={styles.border}
        />
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input value={inputValue} change={handleChange} />
          <Button
            className={styles.form__button}
            type="submit"
            style={{
              width: '100px',
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
