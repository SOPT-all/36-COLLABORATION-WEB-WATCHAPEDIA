import * as styles from '@/app/home/components/MovieCarousel/MovieCarousel.css'
import MovieCarousel from '../MovieCarousel'

const DdayCarousel = () => {
  return (
    <MovieCarousel
      type="dDay"
      className={styles.container}
      slideContainerClassName={styles.slideContainer}
    />
  )
}

export default DdayCarousel
