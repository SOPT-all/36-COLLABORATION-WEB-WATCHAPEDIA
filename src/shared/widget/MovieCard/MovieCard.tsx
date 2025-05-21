"use client"
import * as styles from './MovieCard.css'
import { moviePresets } from "./MovieMock";
import Badge from './_components/Badge';
import Action from './_components/Action';
import SubInfo from './_components/SubInfo';
import MovieCardTags from './_components/MovieCardTags';
import { IcWatchaWhite } from "@/assets/svg";
import Image from 'next/image';


interface MovieCardProps {
  type: keyof typeof moviePresets;
}

const MovieCard = ({ type }: MovieCardProps) => {
  const data = moviePresets[type];

  return (
    <div className={styles.cardWrap}>
      <div className={styles.posterWrap}>
        <Image 
          src={data.imagePath} 
          alt={data.title} 
          className={styles.posterImg} 
        />
        {data.type === 'rank' && (
          <div className={styles.watchaIcon}>
            <IcWatchaWhite />
          </div>
        )}
        <Badge data={data} />
        {(data.type === 'dDay' || data.type === 'boxoffice' || data.type === 'series') && (
          <Action isWishedCount={data.isWishedCount} />
        )}
      </div>
      <div className={styles.title}>{data.title}</div>
      <SubInfo data={data} />
      {data.type === 'rank' && data.tag && (
        <MovieCardTags tags={data.tag} />
      )}
    </div>
  );
};

export default MovieCard;
