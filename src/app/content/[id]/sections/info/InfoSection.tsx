import { detail } from '@/mocks'
import Image from 'next/image'
import InfoContent from '../../components/info/InfoContent/InfoContent'
import InfoHeader from '../../components/info/InfoHeader/InfoHeader'
import * as styles from './InfoSection.css'

const InfoSection = () => {
  const {
    title,
    engTitle,
    releaseYear,
    runningTime,
    genres,
    ageLimit,
    country,
    mainImage,
  } = detail

  return (
    <section>
      <Image
        src={mainImage}
        alt={`${title} 사진`}
        width={375}
        height={530}
        priority
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
