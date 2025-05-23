import * as styles from '@/app/home/components/MovieCarousel/MovieCarousel.css'
import { boxoffice } from '@/mocks'
import { BoxofficeOrSeriesCard } from '@/shared/widget/MovieCard/MovieCard.types'

import MovieCarousel from '../MovieCarousel'

export const boxofficeData: BoxofficeOrSeriesCard[] = boxoffice.map(
  (item) =>
    ({
      ...item,
      movieType: item.movieType as 'MOVIE',
      type: item.type as 'boxoffice',
    }) as BoxofficeOrSeriesCard,
)

const BoxOfficeCarousel = () => {
  return (
    <MovieCarousel
      type="boxoffice"
      data={boxofficeData}
      className={styles.container}
      slideContainerClassName={styles.slideContainer}
    />
  )
}

export default BoxOfficeCarousel
