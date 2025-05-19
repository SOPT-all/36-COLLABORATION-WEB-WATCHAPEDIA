import * as styles from './GraphBar.css';
import React from 'react';

const GraphBar = () => {
  interface GraphBarData {
    score: number;
    height: number;
    highlight?: boolean;
  }

  const graphData: GraphBarData[] = [
    { score: 0.5, height: 1 },
    { score: 1.0, height: 3 },
    { score: 1.5, height: 4 },
    { score: 2.0, height: 9 },
    { score: 2.5, height: 12 },
    { score: 3.0, height: 34 },
    { score: 3.5, height: 46 },
    { score: 4.0, height: 64, highlight: true },
    { score: 4.5, height: 33 },
    { score: 5.0, height: 31 },
  ];

  const maxHeight = Math.max(...graphData.map((bar) => bar.height));
  const maxScore = graphData.find((bar) => bar.height === maxHeight)?.score;
  const labelScores = [0.5, 5.0, maxScore];

  return (
    <section>
      <div className={styles.starGraphWrapper}>
        {graphData.map((bar, index) => (
          <div key={index} className={styles.graphBarWrapper}>

          {labelScores.includes(bar.score) && (
            <span className={styles.scoreLabel({ highlight: bar.highlight ?? false })}>
              {bar.score}
            </span>
          )}

          <div
            className={styles.graphBar({ active: bar.highlight ?? false })}
            style={{ height: `${bar.height}px` }}
          />

        </div>
      ))}
      </div>
    </section>
  );
};

export default GraphBar;