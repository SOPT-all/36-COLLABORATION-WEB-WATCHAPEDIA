import * as styles from './SimilarContentCard.css'
import Image from 'next/image'
import SvgIcStar from '../../../../../assets/svg/IcStar'

interface SimilarContentCardProps {
  title: string
  image: string
  rate: number
  type: string
}

const SimilarContentCard = ({
  title,
  image,
  rate,
  type,
}: SimilarContentCardProps) => {
  return (
    <div className={styles.similarContentCard}>
      <Image
        src={image}
        alt={title}
        width={110}
        height={158}
        className={styles.similarContentCardImage}
      />
      <div className={styles.similarContentCardTitle}>{title}</div>
      <div className={styles.similarContentCardRateWrapper}>
        <p>예상</p>
        <SvgIcStar width={11} height={11} />
        <p>{rate}</p>
      </div>
      <div className={styles.similarContentCardType}>{type}</div>
    </div>
  )
}
export default SimilarContentCard
