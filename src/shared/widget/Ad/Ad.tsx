import Image from 'next/image'

import * as styles from '@/shared/widget/Ad/Ad.css'
import Button from '@/shared/components/Button/Button'
const Ad = () => {
  return (
    <div className={styles.adWrap}>
      <Image
        src="/images/ad/img-ad-1.png"
        alt="광고 이미지"
        width={345}
        height={194}
      />
      <div className={styles.contentWrap}>
        <div className={styles.adTextWrap}>
          <h1 className={styles.adTitle}>
            선택을 기다리는 고요한 전장, 콘클라베
          </h1>
          <p className={styles.adCaption}>
            ~5/1(목)까지 20% 할인가로 만나보세요!
          </p>
          <div className={styles.bottomCaptionWrap}>
            <Image
              src="/images/ad/img-watchapedia-sm.png"
              alt="왓챠 로고"
              width={17}
              height={17}
            />
            <p className={styles.bottomCaption}>왓챠 개별 구매</p>
          </div>
        </div>
        <Button text="지금 구매하기" />
      </div>
    </div>
  )
}

export default Ad
