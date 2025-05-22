import * as styles from '@/app/home/components/MovieCarousel/MovieCarousel.css'
import MovieCarousel from '../MovieCarousel'

const TopRankingCarousel = () => {
  return (
    <MovieCarousel
      type="rank"
      className={styles.container}
      slideContainerClassName={styles.slideContainer}
    />
  )
}

export default TopRankingCarousel
