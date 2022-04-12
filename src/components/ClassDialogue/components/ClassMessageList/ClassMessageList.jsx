import React from 'react';
import styles from './ClassMessageList.module.scss'
import {ClassMessage} from "./components/ClassMessage/ClassMessage";

export class ClassMessageList extends React.Component {
  render() {
    return (
      <div className={styles.message__list}>
        {this.props.messages.map((message) => <ClassMessage message={message.text} author={message.author}/>)}
      </div>
    );
  }
}