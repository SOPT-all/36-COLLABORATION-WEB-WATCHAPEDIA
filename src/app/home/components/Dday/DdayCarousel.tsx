'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import * as styles from '@/app/home/components/Dday/DdayCarousel.css'
import MovieCard from '@/shared/widget/MovieCard'

const DdayCarousel = () => {
  return (
    <div className={styles.container}>
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
        <SwiperSlide>
          <div className={styles.slideContainer}>
            <MovieCard type="dDay" />
            <MovieCard type="dDay" />
            <MovieCard type="dDay" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideContainer}>
            <MovieCard type="dDay" />
            <MovieCard type="dDay" />
            <MovieCard type="dDay" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* 화살표 (hover 시 표시) */}
      <div className={`swiper-button-prev ${styles.navButton}`} />
      <div className={`swiper-button-next ${styles.navButton}`} />
    </div>
  )
}

export default DdayCarousel
