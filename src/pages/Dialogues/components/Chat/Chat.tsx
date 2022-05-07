import React, { useState, FC } from 'react';
import { Button } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { MessageListPure } from './components/MessageList/MessageList';
import { WithClasses } from 'src/HOC/WithClasses';
import { Input } from 'src/components/Input/Input';
import { addMessage } from 'src/store/dialogues/actions';
import { Navigate, useParams } from 'react-router-dom';

import styles from './Chat.module.scss';
import { selectChatList, selectChats } from 'src/store/dialogues/selectors';

export const Chat: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { chatId } = useParams();
  const chats = useSelector(selectChats, shallowEqual);
  const chatList = useSelector(selectChatList, shallowEqual);
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    if (inputValue && chatId) {
      dispatch(addMessage(chatId, inputValue));
      setInputValue('');
    }
    event.preventDefault();
  };

  const MessageListPureWithClass = WithClasses(MessageListPure);

  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <section className={styles.dialogue}>
      <MessageListPureWithClass
        messages={chatId ? chats[chatId] : []}
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
  );
};
