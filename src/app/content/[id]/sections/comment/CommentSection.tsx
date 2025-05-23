import { CommentItem } from '@/shared/types/detail'

import CommentHeader from '../../components/Comment/CommentHeader/CommentHeader'
import CommentContent from '../../components/Comment/CommentContent/CommentContent'
import CommentBottom from '../../components/Comment/CommentBottom/CommentBottom'
import HeaderSection from '../../components/HeaderSection/HeaderSection'

import * as styles from './CommentSection.css'

const CommentSection = ({
  content,
  score,
  likeCount,
  replyCount,
}: CommentItem) => {
  return (
    <HeaderSection title="코멘트" count="6500+" moreButton>
      <div className={styles.commentSectionWrapper}>
        <CommentHeader score={score} />
        <hr className={styles.grayLine} />
        <CommentContent content={content} />
        <hr className={styles.grayLine} />
        <CommentBottom likeCount={likeCount} replyCount={replyCount} />
        <hr className={styles.grayLine} />
        <p className={styles.goodText}>좋아요</p>
      </div>
    </HeaderSection>
  )
}

export default CommentSection
