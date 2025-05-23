'use client'
import Image from 'next/image'

import { IcWatchaWhite } from '@/assets/svg'

import * as styles from './MovieCard.css'
import { moviePresets } from './MovieMock'
import Badge from './_components/Badge'
import Action from './_components/Action'
import SubInfo from './_components/SubInfo'
import MovieCardTags from './_components/MovieCardTags'
import { MovieCardPreset } from './MovieCard.types'

interface MovieCardProps {
  type?: keyof typeof moviePresets
  data?: MovieCardPreset
  onClick?: () => void
}

const MovieCard = ({ type, data, onClick }: MovieCardProps) => {
  const cardData = data ?? (type ? moviePresets[type] : undefined)

  if (!cardData) return null

  return (
    <div className={styles.cardWrap} onClick={onClick}>
      <div className={styles.posterWrap}>
        <Image
          src={cardData.imagePath}
          alt={cardData.title}
          className={styles.posterImg}
          width={110}
          height={158}
        />
        {cardData.type === 'rank' && (
          <div className={styles.watchaIcon}>
            <IcWatchaWhite />
          </div>
        )}
        <Badge data={cardData} />
        {(cardData.type === 'dDay' ||
          cardData.type === 'boxoffice' ||
          cardData.type === 'series') && (
          <Action isWishedCount={cardData.isWishedCount} />
        )}
      </div>
      <div className={styles.title}>{cardData.title}</div>
      <SubInfo data={cardData} />
      {cardData.type === 'rank' && cardData.tag && (
        <MovieCardTags tags={cardData.tag} />
      )}
    </div>
  )
}

export default MovieCard
