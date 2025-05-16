import Image from 'next/image'

import * as styles from '@/shared/widget/Ad/Ad.css'
import Button from '@/shared/components/Button/Button'

type AdType = 'conclave' | 'callenge'

interface AdProps {
  type: AdType
}

const adContentMap: Record<
  AdType,
  {
    image: string
    title: string
    caption: string
    bottomCaption: string
  }
> = {
  conclave: {
    image: '/images/ad/img-ad-1.png',
    title: '캘린지 1주년! 생일 축하해 🎂',
    caption: '영화 6편을 골라보고 캘린지 완주해 보세요',
    bottomCaption: '왓챠피디아',
  },
  callenge: {
    image: '/images/ad/img-ad-2.png',
    title: '선택을 기다리는 고요한 전장, 콘클라베',
    caption: '~5/1(목)까지 20% 할인가로 만나보세요!',
    bottomCaption: '왓챠 개별 구매',
  },
}

const Ad = ({ type }: AdProps) => {
  const adContent = adContentMap[type]
  return (
    <div className={styles.adWrap}>
      <Image
        src={adContent.image}
        className={styles.adImage}
        alt="광고 이미지"
        width={345}
        height={194}
        quality={100}
        priority
      />
      <div className={styles.contentWrap}>
        <div className={styles.adTextWrap}>
          <h1 className={styles.adTitle}>{adContent.title}</h1>
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
        <Button text="지금 구매하기" />
      </div>
    </div>
  )
}

export default Ad
