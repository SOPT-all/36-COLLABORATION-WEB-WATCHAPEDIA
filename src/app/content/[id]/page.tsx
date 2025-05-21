import EvaluationSection from './sections/evaluation/EvaluationSection'
import * as styles from './styles.css'
import DescriptionSection from './sections/descriptionSection/DescriptionSection'
import CollectionSection from './sections/collection/CollectionSection'
import InfoSection from './sections/info/InfoSection'

const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <InfoSection />
      <EvaluationSection />
      <DescriptionSection />
      <CollectionSection />
    </div>
  )
}

export default Content
