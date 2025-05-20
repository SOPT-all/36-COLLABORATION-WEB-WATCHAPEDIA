"use client"
import * as styles from './MovieCard.css'
import { moviePresets } from "./MovieMock";
import Badge from './_components/Badge';
import Action from './_components/Action';
import SubInfo from './_components/SubInfo';
import Star from './_components/Star';
import MovieCardTags from './_components/MovieCardTags';

interface MovieCardProps {
  type: keyof typeof moviePresets;
}

const MovieCard = ({ type }: MovieCardProps) => {
  const data = moviePresets[type];

  return (
    <div className={styles.cardWrap}>
      <div className={styles.posterWrap}>
        <img src={data.poster} alt={data.title} className={styles.posterImg} />
        <Badge type={data.type} badge={data.badge} label={data.label} />
        <Action count={data.count} />
      </div>
      <div className={styles.title}>{data.title}</div>
      <SubInfo data={data} />
      {data.star && <Star star={data.star} />}
      {data.tags && <MovieCardTags tags={[...data.tags]} />}
    </div>
  );
};

export default MovieCard;
