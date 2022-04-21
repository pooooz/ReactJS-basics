import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { ChatInterface } from '../../../../App';

import styles from './ChatList.module.scss';

interface ChatListProps {
  chatList: ChatInterface[];
  onAddChat: (chats: ChatInterface) => void;
  onDeleteChat: (chatName: string) => void;
}

export const ChatList: FC<ChatListProps> = (props) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      props.onAddChat({
        id: nanoid(),
        name,
      });
      setName('');
    }
  };

  return (
    <aside className={styles.chatList}>
      <div className={styles.chatHeader}>Chats</div>
      <ul>
        {props.chatList.map((chat) => (
          <li className={styles.chatItem} key={chat.id}>
            <NavLink to={`/chats/${chat.name}`} className={styles.link}>
              {chat.name}
            </NavLink>
            <button
              className={styles.deleteButton}
              onClick={() => props.onDeleteChat(chat.name)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrap}>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">
          Add chat
        </button>
      </form>
    </aside>
  );
};
