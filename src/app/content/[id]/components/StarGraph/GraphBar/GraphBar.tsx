import * as styles from './GraphBar.css'
import React from 'react'
interface GraphBarData {
  score: number
  height: number
}

const graphData: GraphBarData[] = [
  { score: 0.5, height: 1 },
  { score: 1.0, height: 3 },
  { score: 1.5, height: 4 },
  { score: 2.0, height: 9 },
  { score: 2.5, height: 12 },
  { score: 3.0, height: 34 },
  { score: 3.5, height: 46 },
  { score: 4.0, height: 64 },
  { score: 4.5, height: 33 },
  { score: 5.0, height: 31 },
]

const GraphBar = () => {
  const maxHeight = Math.max(...graphData.map((bar) => bar.height))
  const maxScore = graphData.find((bar) => bar.height === maxHeight)?.score
  const labelScores = [0.5, 5.0, maxScore]

  return (
    <section>
      <div className={styles.starGraphWrapper}>
        {graphData.map(({ score, height }, index) => (
          <div key={index} className={styles.graphBarWrapper}>
            {labelScores.includes(score) && (
              <span
                className={styles.scoreLabel({
                  highlight: maxHeight === height,
                })}
              >
                {score}
              </span>
            )}

            <div
              className={styles.graphBar({ active: maxHeight === height })}
              style={{ height: `${height}px` }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default GraphBar