'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import * as styles from '@/app/home/components/TopRanking/TopRankingCarousel.css'
import MovieCard from '@/shared/widget/MovieCard'

const TopRankingCarousel = () => {
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
            <MovieCard type="rank" />
            <MovieCard type="rank" />
            <MovieCard type="rank" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideContainer}>
            <MovieCard type="rank" />
            <MovieCard type="rank" />
            <MovieCard type="rank" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* 화살표 (hover 시 표시) */}
      <div className={`swiper-button-prev ${styles.navButton}`} />
      <div className={`swiper-button-next ${styles.navButton}`} />
    </div>
  )
}

export default TopRankingCarousel
