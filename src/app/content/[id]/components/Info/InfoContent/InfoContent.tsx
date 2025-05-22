import * as styles from './InfoContent.css'

import Image from 'next/image'

import watchaImg from '/public/images/watcha.png'
import wavveImg from '/public/images/wavve.png'

interface Props {
  title: string
  engTitle: string
  releaseYear: number
  runningTime: number
  genres: string[]
  ageLimit: number
  country: string
}

const InfoContent = ({
  title,
  engTitle,
  releaseYear,
  runningTime,
  genres,
  ageLimit,
  country,
}: Props) => {
  return (
    <div className={styles.infoContainer}>
      <h1 className={styles.infoTitle}>{title}</h1>
      <div className={styles.infoDetail}>
        <p>{engTitle}</p>
        <p>
          {releaseYear} • {genres.join('/')} • {country}
        </p>
        <p>
          <span>
            {`${Math.floor(runningTime / 60)}시간 ${runningTime % 60}분`} •{' '}
            {ageLimit}세
          </span>
        </p>
      </div>
      <div className={styles.infoOttsContainer}>
        <p>감상 가능한 곳</p>
        <div className={styles.infoOtts}>
          <Image
            className={styles.infoOttsImage}
            src={watchaImg}
            alt="왓챠"
            width={68}
            height={68}
          />
          <Image
            className={styles.infoOttsImage}
            src={wavveImg}
            alt="웨이브"
            width={68}
            height={68}
          />
        </div>
      </div>
    </div>
  )
}

export default InfoContent
