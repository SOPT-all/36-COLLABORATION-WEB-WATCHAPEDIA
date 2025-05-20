import * as styles from '../MovieCard.css';
import { IcWatchaBlack } from "@/assets/svg";

export default function SubInfo({ data }: { data: any }) {
  if (!data.date && typeof data.label !== "string") return null;
  return (
    <div className={styles.subInfo}>
      {typeof data.label === "string" && <span className={styles.label}>{data.label}</span>}
      {data.date && (
        <span className={styles.date}>
          {data.type === "dDay" && <IcWatchaBlack />}
          {data.type === "series" && <IcWatchaBlack />}
          {data.type === "boxoffice" && <span className={styles.label}></span>}
          {data.date}
        </span>
      )}
    </div>
  );
} 