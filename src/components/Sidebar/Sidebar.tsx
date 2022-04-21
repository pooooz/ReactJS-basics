import React, { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import styles from './Sidebar.module.scss';

export const Sidebar: FC = () => {
  return (
    <>
      <aside className={styles.sidebar}>
        <ul>
          <li>
            <NavLink className={styles.link} to="/chats">
              Messages
            </NavLink>
          </li>
        </ul>
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
