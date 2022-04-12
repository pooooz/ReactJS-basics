import React, {Component} from "react";
import styles from './ClassMessage.module.scss'

export class ClassMessage extends Component {
  render() {
    return (
      <div className={styles.message}>
        <p className={styles.glitch} data-text={this.props.message}>{this.props.message}</p>
        <p className={styles.glitch} data-text={'Author: <' + this.props.author + '>'}>Author: &lt;{this.props.author}&gt;</p>
      </div>
    );
  }
}