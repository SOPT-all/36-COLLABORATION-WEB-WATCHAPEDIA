import EvaluationSection from './sections/evaluation/EvaluationSection'
import * as styles from './styles.css'
import DescriptionSection from './sections/descriptionSection/DescriptionSection'
import CollectionSection from './sections/collection/CollectionSection'
import InfoSection from './sections/info/InfoSection'
import GraphSection from './sections/graph/GraphSection'
import Ad from '@/shared/widget/Ad/Ad'

const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <InfoSection />
      <EvaluationSection />
      <div className={styles.firstInfoWrapper}>
        <DescriptionSection />
        <GraphSection />
        <Ad type="callenge" />
      </div>
      <CollectionSection />
    </div>
  )
}

export default Content
