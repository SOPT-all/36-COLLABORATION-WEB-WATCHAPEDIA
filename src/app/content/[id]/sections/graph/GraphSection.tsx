import * as styles from './GraphSection.css'
import GraphTextContent from '../../components/StarGraph/GraphTextContent/GraphTextContent'
import GraphBar from '../../components/StarGraph/GraphBar/GraphBar'

const GraphSection = () => {
  return (
    <section className={styles.graphContainer}>
      <GraphTextContent />
      <GraphBar />
    </section>
  )
}

export default GraphSection
