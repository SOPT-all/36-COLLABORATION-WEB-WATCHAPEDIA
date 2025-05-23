'use client'

import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import * as styles from '@/app/home/components/MovieCarousel/MovieCarousel.css'
import MovieCard from '@/shared/widget/MovieCard'
import { MovieCardPreset } from '@/shared/widget/MovieCard/MovieCard.types'
import { PATH } from '@/shared/constants/path'

interface MovieCarouselProps {
  type: 'boxoffice' | 'dDay' | 'series' | 'rank'
  className?: string
  slideContainerClassName?: string
  data?: MovieCardPreset[]
}

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const res: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size))
  }
  return res
}

const MovieCarousel = ({
  type,
  className = '',
  slideContainerClassName = '',
  data = [],
}: MovieCarouselProps) => {
  const router = useRouter()
  const isDataAvailable = data.length > 0
  const chunkedData = isDataAvailable ? chunkArray(data, 3) : []

  return (
    <div className={`${styles.container} ${className}`}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        slidesPerView={1}
        spaceBetween={10}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {isDataAvailable
          ? chunkedData.map((group, idx) => (
              <SwiperSlide key={idx}>
                <div className={slideContainerClassName}>
                  {group.map((item, i) => (
                    <MovieCard
                      key={i}
                      type={type}
                      data={item}
                      onClick={() => router.push(PATH.CONTENT_DETAIL(1))}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))
          : [0, 1].map((_, idx) => (
              <SwiperSlide key={idx}>
                <div className={slideContainerClassName}>
                  <MovieCard type={type} />
                  <MovieCard type={type} />
                  <MovieCard type={type} />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>

      <div className={`swiper-button-prev ${styles.navButton}`} />
      <div className={`swiper-button-next ${styles.navButton}`} />
    </div>
  )
}

export default MovieCarousel
