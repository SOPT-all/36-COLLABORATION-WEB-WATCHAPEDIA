import MovieCard from '@/shared/widget/MovieCard'
import { IcInfo } from '@/assets/svg'
import ReviewChip from '@/shared/components/ReviewChip/ReviewChip'
import { Movie, PreferenceCategory } from '@/shared/types/recommend'
import { getRecommend } from '@/services/recommend/api'

import * as styles from './RecommendOtt.css'
interface RecommendOttProps {
  commentId: number
}

const RecommendOtt = async ({ commentId }: RecommendOttProps) => {
  const { preferenceMovies } = await getRecommend(commentId)

  return (
    <div className={styles.recommendWrapper}>
      {preferenceMovies.map(
        ({ description, keyword, movies }: PreferenceCategory, index) => (
          <div key={`${index} ${description}`} className={styles.block}>
            <div className={styles.blockHeader}>
              <div className={styles.blockTitle}>
                {description}
                <IcInfo className={styles.infoIcon} />
              </div>
              <div className={styles.selectedChip}>
                <ReviewChip key={keyword} text={keyword} isSelected={false} />
              </div>
            </div>
            <div className={styles.cardList}>
              {movies.map(({ id, imagePath, title, score }: Movie) => (
                <MovieCard
                  key={id}
                  data={{
                    imagePath: imagePath,
                    title: title,
                    score: score,
                    type: 'rank',
                  }}
                />
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  )
}

export default RecommendOtt
