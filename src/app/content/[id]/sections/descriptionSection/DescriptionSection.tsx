import Image from 'next/image'

import { DetailItem } from '@/shared/types/detail'

import * as styles from './DescriptionSection.css'

const DescriptionSection = ({
  posterImage,
  detail,
}: Pick<DetailItem, 'detail' | 'posterImage'>) => {
  return (
    <section className={styles.descriptionContainer}>
      <p className={styles.descriptionText}>{detail}</p>
      <Image
        src={posterImage}
        alt="영화 포스터"
        width={267}
        height={385}
        style={{ objectFit: 'cover' }}
      />
    </section>
  )
}

export default DescriptionSection
