import React, {useState, useEffect, useRef} from "react";
import styles from './FuncDialogue.module.scss'
import {FuncMessageList} from "./components/FuncMessageList/FuncMessageList";
import {Input} from "./components/Input/Input";

export const FuncDialogue = () => {
  const [messages, setMessages] = useState([{text: 'Initialization...', author: 'Admin'}]);
  const [inputValue, setInputValue] = useState('');
  const [botMessageCounter, setBotMessageCounter] = useState(0);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    if (inputValue !== '') {
      setMessages([...messages, {text: inputValue, author: 'You'}]);
      setInputValue('');
      setBotMessageCounter(botMessageCounter + 1);
    }
    event.preventDefault();
  }

  const botMessageCounterRef = useRef(botMessageCounter);
  useEffect(() => {
    if (botMessageCounterRef.current !== botMessageCounter) {
      setTimeout(() => {
        setMessages([...messages, {text: '[BOT] Message ' + botMessageCounter, author: 'BOT'}]);
      }, 1500);
    }
  }, [botMessageCounter]);

  return (
    <section className={styles.dialogue}>
      <FuncMessageList messages={messages}/>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input value={inputValue} change={handleChange}/>
        <button className={styles.form__button} type='submit'>Send</button>
      </form>
    </section>
  );
}