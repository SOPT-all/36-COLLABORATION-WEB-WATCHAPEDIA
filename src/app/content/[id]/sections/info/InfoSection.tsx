import Image from 'next/image'

import { DetailItem } from '@/shared/types/detail'

import InfoContent from '../../components/Info/InfoContent/InfoContent'
import InfoHeader from '../../components/Info/InfoHeader/InfoHeader'

import * as styles from './InfoSection.css'

const InfoSection = ({
  title,
  engTitle,
  releaseYear,
  runningTime,
  genres,
  ageLimit,
  country,
  detailImage,
}: Pick<
  DetailItem,
  | 'title'
  | 'engTitle'
  | 'releaseYear'
  | 'runningTime'
  | 'genres'
  | 'ageLimit'
  | 'country'
  | 'detailImage'
>) => {
  return (
    <section className={styles.infoContainer}>
      <Image
        src={detailImage}
        alt={`${title} 사진`}
        width={375}
        height={530}
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.overlay}>
        <InfoHeader />
        <InfoContent
          title={title}
          engTitle={engTitle}
          releaseYear={releaseYear}
          runningTime={runningTime}
          genres={genres}
          ageLimit={ageLimit}
          country={country}
        />
      </div>
    </section>
  )
}

export default InfoSection
