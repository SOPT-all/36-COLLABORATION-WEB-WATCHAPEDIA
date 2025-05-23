import * as styles from '@/app/home/components/MovieCarousel/MovieCarousel.css'
import MovieCarousel from '../MovieCarousel'
import { getTopRanking } from '@/app/services/getTopRanking'
import { RankCard } from '@/shared/widget/MovieCard/MovieCard.types'

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
