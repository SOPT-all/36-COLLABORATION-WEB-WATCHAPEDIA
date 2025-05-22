import { style } from '@vanilla-extract/css'

import {
  swiperContainer,
  swiperNavButton,
} from '@/shared/components/Carousel/CarouselShared.css'

export const container = swiperContainer
export const navButton = swiperNavButton

export const slideContainer = style({
  display: 'flex',
  gap: '8px',
})
