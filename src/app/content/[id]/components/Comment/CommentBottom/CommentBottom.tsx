import React from 'react';

import { IconLike, IconComment } from '@/assets/svg';

import * as styles from './CommentBottom.css'

interface Props {
  likeCount: number,
  replyCount: number,
}

const CommentBottom = ({likeCount, replyCount}: Props) => {
  return (
    <div className={styles.commentBottomWrapper}>
      <div className={styles.iconTextWrapper}>
        <IconLike/>
        <p className={styles.text}>{likeCount}</p>
      </div>
      <div className={styles.iconTextWrapper}>
        <IconComment/>
        <p className={styles.text}>{replyCount}</p>
      </div>
    </div>
  );
};

export default CommentBottom;