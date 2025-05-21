import GraphTextContent from '../../components/StarGraph/GraphTextContent/GraphTextContent'
import GraphBar from '../../components/StarGraph/GraphBar/GraphBar'

import * as styles from './GraphSection.css'

const GraphSection = () => {
  return (
    <section className={styles.graphContainer}>
      <GraphTextContent />
      <GraphBar />
    </section>
  )
}

export default GraphSection
