import * as styles from './StarGraph.css'
import React from 'react';
import GraphBar from './GraphBar/GraphBar';
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