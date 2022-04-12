import React from "react";
import styles from './FuncMessage.module.scss'

export const FuncMessage = (props) => {
  return (
    <div className={styles.message}>
      <p className={styles.glitch} data-text={props.message}>{props.message}</p>
      <p className={styles.glitch} data-text={'Author: <' + props.author + '>'}>Author: &lt;{props.author}&gt;</p>
    </div>
  );
}
