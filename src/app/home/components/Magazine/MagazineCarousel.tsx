'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import * as styles from '@/app/home/components/Magazine/MagazineCarousel.css'
import { magazine } from '@/mocks'

import MagazineCard from './MagazineCard'

const MagazineCarousel = () => {
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
        {magazine.map((card) => (
          <SwiperSlide key={card.id}>
            <MagazineCard
              image={card.image}
              tag={card.tag}
              title={card.title}
              subtitle={card.subtitle}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 화살표 (hover 시 표시) */}
      <div className={`swiper-button-prev ${styles.navButton}`} />
      <div className={`swiper-button-next ${styles.navButton}`} />
    </div>
  )
}

export default MagazineCarousel
