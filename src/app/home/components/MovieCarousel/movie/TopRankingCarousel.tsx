import * as styles from '@/app/home/components/MovieCarousel/MovieCarousel.css'
import { getTopRanking } from '@/app/services/getTopRanking'
import { RankCard } from '@/shared/widget/MovieCard/MovieCard.types'

import MovieCarousel from '../MovieCarousel'

const TopRankingCarousel = async () => {
  const result = await getTopRanking()

  const data: RankCard[] = result.map((item) => ({
    type: 'rank',
    title: item.movieTitle,
    imagePath: item.movieImagePath,
    score: item.expectScore,
    tag: item.movieKeywordList,
  }))

  return (
    <MovieCarousel
      type="rank"
      data={data}
      className={styles.container}
      slideContainerClassName={styles.slideContainer}
    />
  )
}

export default TopRankingCarousel
