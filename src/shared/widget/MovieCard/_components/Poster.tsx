import * as styles from '../MovieCard.css';

export default function Poster({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.posterWrap}>
      <img src={src} alt={alt} className={styles.posterImg} />
    </div>
  );
}
