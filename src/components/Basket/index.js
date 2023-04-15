// libraries
import { useSelector } from "react-redux";

// styles
import styles from "./style.module.scss";

// icons
import { BasketIcon } from '@/constants/icons';

export default function Basket() {

  const { basket } = useSelector(state => state.tree);

  return (
    <div className={styles.basket}>
      <div className={styles.iconContainer}>
        <BasketIcon size={50} />
        <div className={styles.badge}>{basket}</div>
      </div>
    </div>
  )
}
