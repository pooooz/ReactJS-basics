import React from 'react';
import styles from './ClassDialogue.module.scss';
import { ClassMessageList } from './components/ClassMessageList/ClassMessageList';
import { Input } from './components/Input/Input';

export class ClassDialogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{ text: 'Initialization...', author: 'Admin' }],
      inputValue: '',
      botMessageCounter: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.timeout = null;
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.inputValue !== '') {
      this.state.messages.push({ text: this.state.inputValue, author: 'You' });
      this.setState({
        messages: this.state.messages,
        inputValue: '',
        botMessageCounter: this.state.botMessageCounter + 1,
      });
    }
    event.preventDefault();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.botMessageCounter !== prevState.botMessageCounter) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.state.messages.push({ text: '[BOT] Message', author: 'BOT' });
        this.setState({ messages: this.state.messages });
      }, 1500);
    }
  }

  render() {
    return (
      <section className={styles.dialogue}>
        <ClassMessageList messages={this.state.messages} />
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <Input value={this.state.inputValue} change={this.handleChange} />
          <button className={styles.form__button} type="submit">
            Send
          </button>
        </form>
      </section>
    );
  }
}
