import * as styles from './GraphTextContent.css'
import { IcGraphStar } from '@/assets/svg'

const GraphTextContent = () => {
  return (
    <div className={styles.starGraphTextWrapper}>
      <p className={styles.explainText}>별점 그래프</p>
      <div className={styles.bottomText}>
        <p className={styles.averageText}>평균&nbsp;</p>
        <div className={styles.graphStarWrapper}>
          <IcGraphStar />
          <p className={styles.averageText}>3.7</p>
        </div>
        <p className={styles.explainCountText}>(8.8만명)</p>
      </div>
    </div>
  )
}

export default GraphTextContent
