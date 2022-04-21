import React, { FC } from 'react';
import { nanoid } from 'nanoid';

import { Message } from './components/Message/Message';

import { MessageInterface } from '../../../../../../App';

import styles from './MessageList.module.scss';

interface FuncMessageListProps {
  messages: MessageInterface[];
}

const FuncMessagePure = React.memo(Message);

export const MessageList: FC<FuncMessageListProps> = (props) => {
  return (
    <div className={styles.message__list}>
      {props.messages.map((message) => (
        <FuncMessagePure
          message={message.value}
          author={message.author}
          key={nanoid()}
        />
      ))}
    </div>
  );
};
