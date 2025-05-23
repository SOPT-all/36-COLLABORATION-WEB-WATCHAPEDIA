import { DetailItem } from '@/shared/types/detail'

import PreferTag from '../../components/Evaluation/PreferTag/PreferTag'
import RateList from '../../components/Evaluation/RateView/RateList'
import Rating from '../../components/Evaluation/Rating/Rating'
import ReactionButtons from '../../components/Evaluation/ReactionButtons/ReactionButtons'

import * as styles from './EvaluationSection.css'

const EvaluationSection = ({ keywords }: Pick<DetailItem, 'keywords'>) => {
  return (
    <section className={styles.evaluationContainer}>
      <Rating />
      <div className={styles.evaluationLabelWrapper}>
        <RateList />
        <PreferTag keywords={keywords} />
      </div>
      <hr className={styles.evaluationSeparator} />
      <ReactionButtons />
    </section>
  )
}

export default EvaluationSection
