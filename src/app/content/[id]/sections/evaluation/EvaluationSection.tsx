import PreferTag from '../../components/Evaluation/PreferTag/PreferTag'
import RateList from '../../components/Evaluation/RateView/RateList'
import ReactionButtons from '../../components/Evaluation/ReactionButtons/ReactionButtons'
import Rating from '../../components/Evaluation/Rating/Rating'
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
