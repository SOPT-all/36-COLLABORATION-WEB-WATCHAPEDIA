import { style } from '@vanilla-extract/css'
import { font } from '@/app/styles.css'
import { swiperNavButton } from '@/shared/components/Carousel/CarouselShared.css'
export const navButton = swiperNavButton

export const container = style({
  width: '100%',
  maxWidth: '375px',
  position: 'relative',
  marginTop: '18px',
  marginBottom: '25px',
  marginLeft: '15px',
})

export const card = style({
  position: 'relative',
  borderRadius: '4px',
  overflow: 'hidden',
  width: '345px',
  height: '320px',
})

export const label = style([
  font.body_sb_13,
  {
    position: 'absolute',
    top: '13px',
    left: '13px',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '12px',
    padding: '6px 8px',
    borderRadius: '4px',
    zIndex: 2,
  },
])

export const image = style({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
})

export const overlay = style({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  padding: '17px 13px',
  color: 'white',
  background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
})

export const tag = style([
  font.label_r_12,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    marginBottom: '12px',
  },
])

export const title = style([font.title_sb_20])

export const subtitle = style([
  font.subtitle_r_14,
  {
    marginTop: '4px',
  },
])
