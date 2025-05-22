import Image from 'next/image'

import * as styles from '@/app/home/components/TrendingComment/TrendingComment.css'
import {
  IcComment,
  IcLike,
  IcProfileCircle,
  IcStar,
  IcStarEmpty,
} from '@/assets/svg'
import { trendingComment } from '@/mocks'

const TrendingComment = () => {
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < trendingComment.rating ? (
      <IcStar key={index} />
    ) : (
      <IcStarEmpty key={index} />
    ),
  )

  return (
    <div className={styles.commentCard}>
      {/* 유저 정보 */}
      <div className={styles.userInfo}>
        <IcProfileCircle />
        <p className={styles.userName}>{trendingComment.user}</p>
        <div className={styles.starList}>{stars}</div>
      </div>

      {/* 영화 + 내용 */}
      <div className={styles.movieInfo}>
        <Image
          src={trendingComment.movieImage}
          alt={`${trendingComment.movieTitle} 포스터`}
          width={54}
          height={80}
        />
        <div className={styles.movieText}>
          <p className={styles.movieTitle}>{trendingComment.movieTitle}</p>
          <p className={styles.movieReview}>{trendingComment.content}</p>
        </div>
      </div>

      {/* 좋아요, 댓글 수 */}
      <div className={styles.commentFooter}>
        <div className={styles.iconGroup}>
          <IcLike />
          <span>{trendingComment.likes}</span>
        </div>
        <div className={styles.iconGroup}>
          <IcComment />
          <span>{trendingComment.comments}</span>
        </div>
      </div>
    </div>
  )
}

export default TrendingComment
