import * as styles from '@/app/home/components/MovieCarousel/MovieCarousel.css'

import MovieCarousel from '../MovieCarousel'

const SeriesCarousel = () => {
  return (
    <MovieCarousel
      type="series"
      className={styles.container}
      slideContainerClassName={styles.slideContainer}
    />
  )
}

export default SeriesCarousel
