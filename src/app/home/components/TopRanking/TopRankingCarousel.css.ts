import { style, globalStyle } from '@vanilla-extract/css'

export const container = style({
  width: '100%',
  maxWidth: '375px',
  position: 'relative',
  marginTop: '18px',
  marginBottom: '25px',
})

export const slideContainer = style({
  display: 'flex',
  gap: '8px',
})

export const navButton = style({
  color: 'white',
  opacity: 0,
  transition: 'opacity 0.3s ease',
})

// hover 시에만 나타나도록
globalStyle(`${container}:hover .swiper-button-prev`, {
  opacity: 1,
})

globalStyle(`${container}:hover .swiper-button-next`, {
  opacity: 1,
})

// 화살표 아이콘 스타일 덮어쓰기
globalStyle('.swiper-button-prev::after, .swiper-button-next::after', {
  fontSize: '16px',
  color: 'gray',
})

globalStyle('.swiper-button-disabled', {
  display: 'none',
})

globalStyle('.swiper-slide ', {
  width: '345px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '0px',
})
