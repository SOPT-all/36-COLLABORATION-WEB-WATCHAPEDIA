'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import * as styles from '@/app/home/components/Magazine/MagazineCarousel.css'
import MagazineCard from './MagazineCard'

const cards = [
  {
    id: 1,
    image: '/images/view1/img_magazine.png',
    tag: '콘텐츠 소식',
    title: "'콜바넴' 감독 신작 <퀴어>, 6월에 옵니다",
    subtitle: '4월 3주차 주요 콘텐츠 소식',
  },
  {
    id: 2,
    image: '/images/view1/img_magazine.png',
    tag: '콘텐츠 소식',
    title: "'콜바넴' 감독 신작 <퀴어>, 6월에 옵니다",
    subtitle: '4월 3주차 주요 콘텐츠 소식',
  },
]

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
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <MagazineCard />
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
