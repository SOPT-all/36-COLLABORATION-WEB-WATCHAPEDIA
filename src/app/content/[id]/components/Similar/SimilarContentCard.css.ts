import { style } from '@vanilla-extract/css'

import { color, font } from '@/app/styles.css'

export const similarContentCard = style({
  display: 'flex',
  width: '110px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
})

export const similarContentCardImage = style({
  width: '110.836px',
  height: 158,
  flexShrink: 0,
  borderRadius: 4,
})

export const similarContentCardTitle = style([
  font.title_m_14,
  {
    display: '-webkit-box',
    width: '94px',
    maxWidth: '94px',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '1',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
])

export const similarContentCardRateWrapper = style([
  font.label_r_12,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    color: color.brand.primary,
  },
])

export const similarContentCardType = style([
  font.label_r_12,
  {
    alignSelf: 'stretch',
    color: color.gray.gray4,
  },
])
