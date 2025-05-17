import * as styles from '@/app/home/components/TrendingComment/TrendingComment.css'
import { IcProfileCircle, IcStar, IcStarEmpty } from '@/assets/svg'
import Image from 'next/image'

const TrendingComment = () => {
  const comment = {
    user: '이수종',
    movieTitle: '악연',
    movieImage: '/images/view1/img_comment_poster.png',
    content:
      '악연이라는 실로 엮인 팽팽한 긴장감. 느슨한 부분도 있지만 그래도 괜찮아!',
    rating: 4,
    likes: 10,
    comments: 3,
  }

  return (
    <div className={styles.commentCard}>
      {/* 유저 정보 */}
      <div className={styles.userInfo}>
        <IcProfileCircle />
        <p className={styles.userName}>{comment.user}</p>
        <IcStar />
        <IcStarEmpty />
      </div>

      {/* 영화 + 내용 */}
      <div className={styles.movieInfo}>
        <Image
          src={comment.movieImage}
          alt={`${comment.movieTitle} 포스터`}
          width={54}
          height={80}
        />
        <div className={styles.movieText}>
          <p className={styles.movieTitle}>{comment.movieTitle}</p>
          <p className={styles.movieReview}>{comment.content}</p>
        </div>
      </div>
    </div>
  )
}

export default TrendingComment
