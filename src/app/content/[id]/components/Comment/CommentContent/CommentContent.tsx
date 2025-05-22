import * as styles from './CommentContent.css'

interface Props {
  content: string
}

const CommentContent = ({ content }: Props) => {
  return <div className={styles.commentContentWrapper}>{content}</div>
}

export default CommentContent
