import Image from 'next/image'
import * as styles from '@/app/home/components/Magazine/MagazineCard.css'

const MagazineCard = () => {
  return (
    <div>
      <Image
        src="/images/view1/img_magazine.png"
        alt="매거진 이미지"
        width={345}
        height={194}
        className={styles.magazineImage}
      />
      <div className={styles.magazineBottom}>
        <div className={styles.magazineLabel}>
          <Image
            src="/images/banner/img_watcha_circle.png"
            alt="watcha 원형 아이콘"
            width={18}
            height={18}
            unoptimized
            className={styles.magazinelabelIcon}
          />
          <p>콘텐츠 소식</p>
        </div>
        <p className={styles.magazineTitle}>
          '콜바넴' 감독 신작 &lt;퀴어&gt;, 6월에 옵니다
        </p>
        <p className={styles.magazineCaption}>4월 3주차 주요 콘텐츠 소식 </p>
      </div>
    </div>
  )
}

export default MagazineCard
