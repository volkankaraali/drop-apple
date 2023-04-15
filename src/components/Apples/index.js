// icons
import { AppleIcon } from "@/constants";

// styles
import styles from "./style.module.scss";

export default function Apples({ position }) {
  return (
    <div className={`${styles.container} ${position === 'tree' ? styles.appleOnTree : styles.appleOnGround}`}>
      <AppleIcon />
    </div>
  )
}
