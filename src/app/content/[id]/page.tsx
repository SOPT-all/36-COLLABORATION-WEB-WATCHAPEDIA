import DescriptionSection from './sections/descriptionSection/DescriptionSection'
import EvaluationSection from './sections/evaluation/EvaluationSection'
import InfoSection from './sections/info/InfoSection'
import * as styles from './styles.css'

const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <InfoSection />
      <EvaluationSection />
      <DescriptionSection />
    </div>
  )
}

export default Content
