import React from 'react';
import styles from './FuncMessageList.module.scss';
import { FuncMessage } from './components/FuncMessage/FuncMessage';

export const FuncMessageList = (props) => {
  return (
    <div className={styles.message__list}>
      {props.messages.map((message, idx) => (
        <FuncMessage message={message.text} author={message.author} key={idx} />
      ))}
    </div>
  );
};
