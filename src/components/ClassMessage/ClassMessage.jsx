import React, {Component} from "react";
import styles from './ClassMessage.module.scss'

export class ClassMessage extends Component {
  render() {
    return <h1 className={styles.glitch} data-text={this.props.message}>{this.props.message}</h1>
  }
}