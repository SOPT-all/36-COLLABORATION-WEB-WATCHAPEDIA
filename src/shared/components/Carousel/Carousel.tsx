'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import * as styles from '@/shared/components/Carousel/Carousel.css'
const Carousel = () => {
  const cards = [
    {
      id: 1,
      category: '영화',
      tag: '큐레이션',
      title: '내 배우의 필모그래피만 모았다',
      subtitle: '다미많이 좋이라면 덕질은 여기서',
      image: '/images/banner/img-main-banner-1.png',
    },
    {
      id: 2,
      category: 'TV',
      tag: '큐레이션',
      title: '내 배우의 필모그래피만 모았다',
      subtitle: '다미많이 좋이라면 덕질은 여기서',
      image: '/images/banner/img-main-banner-2.png',
    },
  ]

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        slidesPerView={1}
        spaceBetween={10}
        loop={false}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className={styles.card}>
              {/* 양 옆 화살표 */}
              <div className={`swiper-button-prev ${styles.navButton}`} />
              <div className={`swiper-button-next ${styles.navButton}`} />
              <div className={styles.label}>{card.category}</div>
              <Image
                src={card.image}
                alt={card.title}
                fill
                className={styles.image}
                priority
              />
              <div className={styles.overlay}>
                <div className={styles.tag}>
                  <Image
                    src="/images/banner/img-watcha-circle.png"
                    alt="watcha 원형 아이콘"
                    width={18}
                    height={18}
                    unoptimized
                  />
                  {card.tag}
                </div>
                <h3 className={styles.title}>{card.title}</h3>
                <p className={styles.subtitle}>{card.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
