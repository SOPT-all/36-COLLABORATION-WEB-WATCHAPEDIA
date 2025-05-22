import { globalStyle, style } from '@vanilla-extract/css'

export const swiperContainer = style({
  width: '100%',
  maxWidth: '345px',
  position: 'relative',
})

export const swiperNavButton = style({
  color: 'white',
  opacity: 0,
  transition: 'opacity 0.3s ease',
})

// 화살표 hover 시 나타나기
globalStyle(`${swiperContainer}:hover .swiper-button-prev`, {
  opacity: 1,
})

globalStyle(`${swiperContainer}:hover .swiper-button-next`, {
  opacity: 1,
})

// 화살표 아이콘 덮어쓰기
globalStyle('.swiper-button-prev::after, .swiper-button-next::after', {
  fontSize: '16px',
  color: 'gray',
})

globalStyle('.swiper-button-disabled', {
  display: 'none',
})

globalStyle('.swiper-slide', {
  width: '345px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '0px',
})
