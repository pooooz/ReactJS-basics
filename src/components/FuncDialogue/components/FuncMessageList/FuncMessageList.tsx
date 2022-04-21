import React, { FC } from 'react';
import styles from './FuncMessageList.module.scss';
import { FuncMessage } from './components/FuncMessage/FuncMessage';
import { Message } from '../../FuncDialogue';

interface FuncMessageListProps {
  messages: Message[];
}

const FuncMessagePure = React.memo(FuncMessage);

export const FuncMessageList: FC<FuncMessageListProps> = (props) => {
  return (
    <div className={styles.message__list}>
      {props.messages.map((message, idx) => (
        <FuncMessagePure
          message={message.text}
          author={message.author}
          key={idx}
        />
      ))}
    </div>
  );
};
