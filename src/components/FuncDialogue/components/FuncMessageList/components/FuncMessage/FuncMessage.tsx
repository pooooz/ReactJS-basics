import React, { FC } from 'react';
import styles from './FuncMessage.module.scss';

interface FuncMessageProps {
  message: string;
  author: string;
}

export const FuncMessage: FC<FuncMessageProps> = (props) => {
  return (
    <div className={styles.message}>
      <p className={styles.glitch} data-text={props.message}>
        {props.message}
      </p>
      <p className={styles.glitch} data-text={'Author: <' + props.author + '>'}>
        Author: &lt;{props.author}&gt;
      </p>
    </div>
  );
};
