import React from 'react';
import styles from './Input.module.scss';

export class Input extends React.Component {
  render() {
    return (
      <>
        <div className={styles.input_wrap}>
          <input
            className={styles.input_green}
            type="text"
            value={this.props.value}
            onChange={this.props.change}
          />
        </div>
      </>
    );
  }
}
