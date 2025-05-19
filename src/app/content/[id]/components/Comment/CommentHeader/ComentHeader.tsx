import * as styles from './CommentHeader.css'
import Image from "next/image";
import { IcCommentStar } from '@/assets/svg';

interface Props {
  score: number
}

const CommentHeader = ({score}: Props) => {
  //API로 넘어오지 않는 값 상수로 정의
  const userData = {
    castImage: '/images/view2/cast_1.png',
    castName: '김영훈',
  };

  return (
    <div className={styles.commentHeaderWrapper}>
      <div className={styles.userInfoWrapper}>
        <Image
          className={styles.profile}
          src={userData.castImage}
          alt= {`${userData.castName} 사진`}
          width={30}
          height={30}
        />
        <div className={styles.name}>{userData.castName}</div>
      </div>
      <div className={styles.scoreWrapper}>
        <IcCommentStar/>
        <p className={styles.score}>{score.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default CommentHeader;