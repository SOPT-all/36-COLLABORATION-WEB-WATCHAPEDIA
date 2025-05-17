import Image from 'next/image'

import * as styles from '@/shared/widget/ad/Ad.css'
import Button from '@/shared/components/Button/Button'
import { adContentMap } from './AdContent'

type AdType = 'conclave' | 'callenge'
interface AdProps {
  type: AdType
}

const Ad = ({ type }: AdProps) => {
  const adContent = adContentMap[type]
  return (
    <div className={styles.adWrap}>
      <Image
        src={adContent.image}
        className={styles.adImage}
        alt={`${type} 광고 이미지`}
        width={345}
        height={194}
        quality={100}
        priority
      />
      <div className={styles.contentWrap}>
        <div className={styles.adTextWrap}>
          <p className={styles.adTitle}>{adContent.title}</p>
          <p className={styles.adCaption}>{adContent.caption}</p>
          <div className={styles.bottomCaptionWrap}>
            <Image
              src="/images/ad/img-watchapedia-sm.png"
              alt="왓챠 로고"
              width={17}
              height={17}
              quality={100}
            />
            <p className={styles.bottomCaption}>{adContent.bottomCaption}</p>
          </div>
        </div>
        <Button
          text={type === 'conclave' ? '지금 구매하기' : '지금 참여하기'}
        />
      </div>
    </div>
  )
}

export default Ad
