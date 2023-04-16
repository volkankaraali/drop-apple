// styles
import styles from "./style.module.scss";

export default function Button({ text, onClick }) {

  return (
    <button
      className={text === 'shake' ? styles.shakeButton : styles.newTreeButton}
      onClick={onClick}
    >
      {text}
    </button >
  )
}
