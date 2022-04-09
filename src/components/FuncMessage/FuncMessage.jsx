import styles from './FuncMessage.module.scss'

export const FuncMessage = (props) => {
  return <h1 className={styles.glitch} data-text={props.message}>{props.message}</h1>
}