import * as styles from '@/app/home/components/MovieCarousel/MovieCarousel.css'
import MovieCarousel from '../MovieCarousel'

const BoxOfficeCarousel = () => {
  return (
    <MovieCarousel
      type="boxoffice"
      className={styles.container}
      slideContainerClassName={styles.slideContainer}
    />
  )
}

export default BoxOfficeCarousel
