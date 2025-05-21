import * as styles from '../MovieCard.css';
import { IcStar } from "@/assets/svg";

export default function Star({ star }: { star: number }) {
  return (
    <div className={styles.starWrap}>
      <span className={styles.starLabel}>예상</span>
      <IcStar />
      <span className={styles.starLabel}>{star}</span>
    </div>
  );
} 