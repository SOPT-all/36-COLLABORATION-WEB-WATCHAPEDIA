import LabelContent from '../LabelContainer/LabelContent'
import * as styles from './RateList.css'
interface RateProps {
  label: '예상' | '평균'
  rate: string
  color: 'primary' | 'gray'
}

const RateList = () => {
  return (
    <LabelContent
      label="평점"
      gap="lg"
      children={
        <div className={styles.rateContainer}>
          <Rate label="예상" rate="0.0" color="primary" />
          <hr className={styles.rateSeparator} />
          <Rate label="평균" rate="0.0" color="gray" />
        </div>
      }
    />
  )
}

const Rate = ({ label, rate, color }: RateProps) => {
  return (
    <div className={styles.rateWrapper({ color })}>
      <span className={styles.rateLabel({ label })}>{label}</span>
      <span className={styles.rate}>{rate}</span>
    </div>
  )
}

export default RateList
