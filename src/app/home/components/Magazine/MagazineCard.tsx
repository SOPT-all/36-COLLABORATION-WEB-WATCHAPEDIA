import Image from 'next/image'

import * as styles from '@/app/home/components/Magazine/MagazineCard.css'

interface MagazineCardProps {
  image: string
  tag: string
  title: string
  subtitle: string
}

const MagazineCard = ({ image, tag, title, subtitle }: MagazineCardProps) => {
  return (
    <div>
      <Image
        src={image}
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
            className={styles.magazinelabelIcon}
          />
          <p>{tag}</p>
        </div>
        <p className={styles.magazineTitle}>{title}</p>
        <p className={styles.magazineCaption}>{subtitle}</p>
      </div>
    </div>
  )
}

export default MagazineCard
