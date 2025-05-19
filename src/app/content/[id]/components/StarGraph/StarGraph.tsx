import * as styles from './StarGraph.css'
import GraphBar from '../StarGraph/GraphBar/GraphBar'
import GraphTextContent from './GraphTextContent/GraphTextContent';

const StarGraph = () => {
  return (
    <div className={styles.starGraphAllWrapper}>
      <GraphTextContent/>
      <GraphBar/>
    </div>
  );
};

export default StarGraph;