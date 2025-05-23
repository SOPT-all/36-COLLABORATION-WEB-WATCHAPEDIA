import * as styles from '@/app/home/components/MovieCarousel/MovieCarousel.css'
import { seriesData } from '@/mocks'

import MovieCarousel from '../MovieCarousel'

const SeriesCarousel = () => {
  return (
    <MovieCarousel
      type="series"
      data={seriesData}
      className={styles.container}
      slideContainerClassName={styles.slideContainer}
    />
  )
}

export default SeriesCarousel
