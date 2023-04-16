// libraries
import { useSelector } from "react-redux";

// styles
import styles from "./style.module.scss";

// icons
import { BasketIcon } from '@/constants/icons';
import Apples from "../Apples";

export default function Basket() {

  const { basket } = useSelector(state => state.tree);
  return (
    <div className={styles.basket}>
      <div className={styles.iconContainer}>
        <BasketIcon size={60} />
        {
          basket > 0 && <div className={styles.appleContainer}>
            <Apples position="basket" />
            <Apples position="basket" />
          </div>
        }
        <div className={styles.badge}>{basket}</div>
      </div>
    </div>
  )
}
