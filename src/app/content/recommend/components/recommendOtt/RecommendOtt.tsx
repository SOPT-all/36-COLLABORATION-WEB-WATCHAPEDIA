'use client'
import MovieCard from '@/shared/widget/MovieCard'
import { IcInfo } from '@/assets/svg'
import ReviewChip from '@/shared/components/ReviewChip/ReviewChip'

import * as styles from './RecommendOtt.css'

const uxDescriptions = [
  '하은님의 힐링을 위한 작품',
  '혼자만의 시간을 위한 추천작',
]

const categoryMovies = [
  [
    {
      id: 1,
      imagePath: '/img/poster.png',
      title: '기생충',
      score: 9.1,
      keyword: [
        { keyword: '연출이 훌륭해요' },
        { keyword: '미장센이 아름다워요' },
      ],
    },
    {
      id: 2,
      imagePath: '/img/poster.png',
      title: '타짜',
      score: 8.7,
      keyword: [{ keyword: '연출이 훌륭해요' }],
    },
  ],
  [
    {
      id: 3,
      imagePath: '/img/poster.png',
      title: '올드보이',
      score: 8.8,
      keyword: [{ keyword: '연기력이 훌륭해요' }],
    },
    {
      id: 4,
      imagePath: '/img/poster.png',
      title: '곡성',
      score: 8.5,
      keyword: [{ keyword: '연기력이 훌륭해요' }, { keyword: '몰입감 최고' }],
    },
  ],
]

interface RecommendOttProps {
  selectedChips: string[]
}

const RecommendOtt = ({ selectedChips }: RecommendOttProps) => {
  return (
    <div className={styles.recommendWrapper}>
      {uxDescriptions.map((desc, idx) => (
        <div key={desc} className={styles.block}>
          <div className={styles.blockTitle}>
            {desc}
            <IcInfo />
          </div>
          <div className={styles.selectedChip}>
            {desc === '하은님의 힐링을 위한 작품' &&
              selectedChips.map((chip) => (
                <ReviewChip
                  key={chip}
                  text={chip}
                  isSelected={false}
                  disabled={false}
                />
              ))}
            {desc === '혼자만의 시간을 위한 추천작' && (
              <ReviewChip
                key="혼자"
                text="🙋‍♀️혼자"
                isSelected={false}
                disabled={false}
              />
            )}
          </div>
          <div className={styles.cardList}>
            {categoryMovies[idx].map((movie) => (
              <MovieCard
                key={movie.id}
                data={{
                  imagePath: movie.imagePath,
                  title: movie.title,
                  score: movie.score,
                  type: 'rank',
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecommendOtt
