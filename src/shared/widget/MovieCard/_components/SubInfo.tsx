import * as styles from '../MovieCard.css';
import { IcWatchaBlack } from "@/assets/svg";
import { MovieCardPreset } from '../MovieCard.types';
import Star from './Star';

interface SubInfoProps {
  data: MovieCardPreset;
}

export default function SubInfo({ data }: SubInfoProps) {
  if (data.type === 'dDay' || data.type === 'boxoffice' || data.type === 'series') {
    return (
      <div>
        <span className={styles.date}>
          {(data.type === "dDay" || data.type === "series") && <IcWatchaBlack />}
          {data.releaseYear}
        </span>
      </div>
    );
  }

  if (data.type === 'rank') {
    return (
      <div>
        <span className={styles.date}>
          <Star star={data.score} />
        </span>
      </div>
    );
  }

  return null;
} 