import { IcPlus } from '@/assets/svg'

import * as styles from '../MovieCard.css'

export default function Action({
  isWishedCount,
}: {
  isWishedCount?: number | string
}) {
  if (isWishedCount === undefined) return null
  return (
    <div className={styles.actionWrap}>
      <div className={styles.addButton}>
        <IcPlus />
      </div>
      <span className={styles.count}>{isWishedCount}</span>
    </div>
  )
}
