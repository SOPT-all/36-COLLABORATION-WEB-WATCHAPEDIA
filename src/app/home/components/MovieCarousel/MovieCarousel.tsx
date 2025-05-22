'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import * as styles from '@/app/home/components/MovieCarousel/MovieCarousel.css'
import MovieCard from '@/shared/widget/MovieCard'

interface MovieCarouselProps {
  type: 'boxoffice' | 'dDay' | 'series' | 'rank'
  className?: string
  slideContainerClassName?: string
}

const MovieCarousel = ({
  type,
  className = '',
  slideContainerClassName = '',
}: MovieCarouselProps) => {
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
        {[0, 1].map((_, idx) => (
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
