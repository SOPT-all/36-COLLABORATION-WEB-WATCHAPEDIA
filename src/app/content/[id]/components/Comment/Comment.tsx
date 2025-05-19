import { comment } from '@/mocks';
import * as styles from './Comment.css'
import CommentBottom from './CommentBottom/CommentBottom';
import CommentContent from './CommentContent/CommentContent';
import CommentHeader from './CommentHeader/ComentHeader';

const Comment = () => {
  const {
    content,
    score,
    likeCount,
    replyCount
  } = comment

  return (
    <div className={styles.comentAllWrapper}>
      <CommentHeader score={score}/>
      <div className={styles.grayLine}/>
      <CommentContent content={content}/>
      <div className={styles.grayLine}/>
      <CommentBottom likeCount={likeCount} replyCount={replyCount}/>
      <div className={styles.grayLine}/>
      <p className={styles.goodText}>좋아요</p>
    </div>
  );
};

export default Comment;