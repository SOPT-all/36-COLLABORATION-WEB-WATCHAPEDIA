import * as styles from '../MovieCard.css';
import { IcWatchaBlack } from "@/assets/svg";
import { MovieCardPreset } from '../MovieCard.types';

export default function SubInfo({ data }: { data: MovieCardPreset }) {
  if (!data.date && typeof data.label !== "string") return null;
  return (
    <div>
      {typeof data.label === "string" && data.label}
      {data.date && (
        <span className={styles.date}>
          {data.type === "dDay" && <IcWatchaBlack />}
          {data.type === "series" && <IcWatchaBlack />}
          {data.type === "boxoffice"}
          {data.date}
        </span>
      )}
    </div>
  );
} 