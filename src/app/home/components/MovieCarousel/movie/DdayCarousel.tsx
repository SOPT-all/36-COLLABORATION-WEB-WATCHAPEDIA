import * as styles from '@/app/home/components/MovieCarousel/MovieCarousel.css'
import { DDayCard } from '@/shared/widget/MovieCard/MovieCard.types'
import { getdDay } from '@/services/home/api'

import MovieCarousel from '../MovieCarousel'

const DdayCarousel = async () => {
  const result = await getdDay()

  const data: DDayCard[] = result.map((item, index) => ({
    id: index,
    untilRelease: item.untilRelease,
    isWishedCount: item.isWishedCount,
    imagePath: item.imagePath,
    title: item.title,
    releaseYear: item.releaseYear,
    type: 'dDay',
  }))

  return (
    <MovieCarousel
      type="dDay"
      data={data}
      className={styles.container}
      slideContainerClassName={styles.slideContainer}
    />
  )
}

export default DdayCarousel
