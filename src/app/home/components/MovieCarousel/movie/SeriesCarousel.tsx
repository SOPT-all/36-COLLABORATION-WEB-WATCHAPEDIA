import * as styles from '@/app/home/components/MovieCarousel/MovieCarousel.css'

import MovieCarousel from '../MovieCarousel'
import { series } from '@/mocks'

const SeriesCarousel = () => {
  return (
    <MovieCarousel
      type="series"
      data={series}
      className={styles.container}
      slideContainerClassName={styles.slideContainer}
    />
  )
}

export default SeriesCarousel
