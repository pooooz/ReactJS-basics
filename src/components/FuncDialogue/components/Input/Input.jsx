import React from 'react';
import styles from './Input.module.scss';

export const Input = (props) => {
  return (
    <>
      <div className={styles.input_wrap}>
        <input
          className={styles.input_green}
          type="text"
          value={props.value}
          onChange={props.change}
        />
      </div>
    </>
  );
};
