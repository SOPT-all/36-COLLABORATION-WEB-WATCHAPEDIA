import PreferTag from '../../components/evaluation/PreferTag/PreferTag'
import RateList from '../../components/evaluation/RateView/RateList'
import ReactionButtons from '../../components/evaluation/ReactionButtons/ReactionButtons'
import Rating from '../../components/evaluation/Rating/Rating'
import * as styles from './EvaluationSection.css'

const EvaluationSection = () => {
  return (
    <section>
      <div className={styles.evaluationContainer}>
        <Rating />
        <RateList />
        <PreferTag />
        <hr className={styles.evaluationSeparator} />
        <ReactionButtons />
      </div>
    </section>
  )
}

export default EvaluationSection
