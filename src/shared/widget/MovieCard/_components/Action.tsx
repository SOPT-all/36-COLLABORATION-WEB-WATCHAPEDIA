import * as styles from '../MovieCard.css';
import { IcPlus } from "@/assets/svg";

export default function Action({ count }: { count?: number | string }) {
  if (count === undefined) return null;
  return (
    <div className={styles.actionWrap}>
      <div className={styles.addButton}><IcPlus /></div>
      <span className={styles.count}>{count}</span>
    </div>
  );
} 