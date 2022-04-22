import React, { FC, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { Chat } from './components/Chat/Chat';
import { ChatList } from './components/ChatList/ChatList';

import { Messages } from 'src/App';
import { ChatInterface } from 'src/App';

import styles from './Dialogue.module.scss';

interface DialogueProps {
  messages: Messages;
  setMessages: React.Dispatch<React.SetStateAction<Messages>>;
  chatList: ChatInterface[];
  onAddChat: (chats: ChatInterface) => void;
  onDeleteChat: (chatName: string) => void;
}

export const Dialogue: FC<DialogueProps> = (props) => {
  const { chatId } = useParams();

  useEffect(() => {
    if (
      chatId &&
      props.messages[chatId]?.length > 0 &&
      props.messages[chatId][props.messages[chatId].length - 1].author !== 'BOT'
    ) {
      const timeout = setTimeout(() => {
        props.setMessages({
          ...props.messages,
          [chatId]: [
            ...props.messages[chatId],
            {
              id: nanoid(),
              author: 'BOT',
              value: 'Message',
            },
          ],
        });
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [chatId, props]);

  const addMessage = useCallback(
    (value: string) => {
      if (chatId) {
        props.setMessages((prevMessage) => ({
          ...prevMessage,
          [chatId]: [
            ...prevMessage[chatId],
            {
              id: nanoid(),
              author: 'You',
              value,
            },
          ],
        }));
      }
    },
    [chatId, props.setMessages]
  );

  if (!props.chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className={styles.dialogue}>
      <Chat
        messages={chatId ? props.messages[chatId] : []}
        addMessage={addMessage}
      />
      <ChatList
        chatList={props.chatList}
        onAddChat={props.onAddChat}
        onDeleteChat={props.onDeleteChat}
      />
    </div>
  );
};
