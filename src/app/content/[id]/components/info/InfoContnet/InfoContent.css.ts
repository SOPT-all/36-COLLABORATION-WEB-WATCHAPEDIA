import { color, font } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'

export const infoContainer = style([
  font.subtitle_r_14,
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    color: 'white',
    padding: '10px 0',
    gap: 16,
    height: 360,
  },
])

export const infoTitle = style([
  font.headline_b_36,
  {
    display: 'flex',
    flexDirection: 'column',
    height: 140,
    justifyContent: 'flex-end',
  },
])

export const infoDetail = style([
  font.subtitle_r_14,
  {
    display: 'flex',
    gap: 8,
    flexDirection: 'column',
  },
])

export const infoOttsContainer = style([
  font.label_r_12,
  {
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
    color: color.gray.gray5,
  },
])

export const infoOtts = style({
  display: 'flex',
  gap: 8,
})
