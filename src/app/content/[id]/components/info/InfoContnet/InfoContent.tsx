import SvgOttsWatcha from '@/assets/svg/OttsWatcha'
import SvgOttWavve from '@/assets/svg/OttWavve'
import * as styles from './InfoContent.css'
import { DetailItem } from '@/shared/types/detail'

type InfoContentProps = Pick<
  DetailItem,
  | 'title'
  | 'engTitle'
  | 'releaseYear'
  | 'runningTime'
  | 'genres'
  | 'ageLimit'
  | 'country'
>

const InfoContent = ({
  title,
  engTitle,
  releaseYear,
  runningTime,
  genres,
  ageLimit,
  country,
}: InfoContentProps) => {
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
          <SvgOttsWatcha widths={68} height={68} />
          <SvgOttWavve widths={68} height={68} />
        </div>
      </div>
    </div>
  )
}

export default InfoContent
