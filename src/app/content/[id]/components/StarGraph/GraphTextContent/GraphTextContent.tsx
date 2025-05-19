import * as styles from './GraphTextContent.css'
import { IcGraphStar } from '@/assets/svg';

const GraphTextContent = () => {

  const STAR_GRAPH_DATA = {
    averageRating: 3.7,
    reviewCount: '8.8만명',
  };

  return (
    <div className={styles.starGraphTextWrapper}>
        <p className={styles.explainText}>별점 그래프</p>
        <div className={styles.bottomText}>
          <div className={styles.averageWrapper}>
            <p className={styles.averageText}>평균&nbsp;</p>
            <div className={styles.graphStar}><IcGraphStar/></div>
            <p className={styles.averageText}>{STAR_GRAPH_DATA.averageRating}</p>
          </div>
          <p className={styles.explainCountText}>&nbsp;({STAR_GRAPH_DATA.reviewCount})</p>
        </div>
      </div>
  );
};

export default GraphTextContent;