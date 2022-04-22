import React, { FC } from 'react';
import { nanoid } from 'nanoid';

import { MessagePure } from './components/Message/Message';

import { MessageInterface } from 'src/App';

import styles from './MessageList.module.scss';

interface MessageListProps {
  messages: MessageInterface[];
}

export const MessageList: FC<MessageListProps> = (props) => {
  return (
    <div className={styles.message__list}>
      {props.messages.map((message) => (
        <MessagePure
          message={message.value}
          author={message.author}
          key={nanoid()}
        />
      ))}
    </div>
  );
};

export const MessageListPure = React.memo(MessageList);
