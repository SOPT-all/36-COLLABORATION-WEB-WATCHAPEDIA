import * as styles from '../MovieCard.css'
import { MovieCardPreset } from '../MovieCard.types'

interface BadgeProps {
  data: MovieCardPreset
}

export default function Badge({ data }: BadgeProps) {
  if (data.type === 'dDay') {
    return <div className={styles.dDayBadge}>D-{data.untilRelease}</div>
  }

  if (data.type === 'boxoffice') {
    return <div className={styles.rankBadge}>극장</div>
  }

  if (data.type === 'series') {
    return (
      <div className={styles.dDayBadge}>
        <span>D-{data.untilRelease}</span>
      </div>
    )
  }

  if (data.type === 'rank') {
    return <div className={styles.rankBadge}>{data.id}</div>
  }

  return null
}
