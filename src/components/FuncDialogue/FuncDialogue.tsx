import React, { useState, useEffect, useRef, FC } from 'react';
import styles from './FuncDialogue.module.scss';
import { FuncMessageList } from './components/FuncMessageList/FuncMessageList';
import { Input } from './components/Input/Input';
import { Button, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Press Start 2P',
  },
});

export interface Message {
  text: string;
  author: string;
}

const FuncMessageListPure = React.memo(FuncMessageList);

export const FuncDialogue: FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Initialization...', author: 'Admin' },
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [botMessageCounter, setBotMessageCounter] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    if (inputValue) {
      setMessages([...messages, { text: inputValue, author: 'You' }]);
      setInputValue('');
      setBotMessageCounter(botMessageCounter + 1);
    }
    event.preventDefault();
  };

  const botMessageCounterRef = useRef(botMessageCounter);
  useEffect(() => {
    if (
      messages[messages.length - 1].author !== 'BOT' &&
      botMessageCounterRef.current !== botMessageCounter
    ) {
      const timeout = setTimeout(() => {
        setMessages([...messages, { text: '[BOT] Message', author: 'BOT' }]);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [botMessageCounter, messages]);

  return (
    <ThemeProvider theme={theme}>
      <section className={styles.dialogue}>
        <FuncMessageListPure messages={messages} />
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
