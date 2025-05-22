import { style } from '@vanilla-extract/css'

import { color, font } from '@/app/styles.css'

export const commentSectionWrapper = style({
  backgroundColor: color.background.subtitle,
  width: '321px',
  height: '253px',
  borderRadius: '7px',
  padding: '12px 19px 12px 12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '11px',
})

export const grayLine = style({
  border: `0.5px solid ${color.gray.gray2}`,
  width: 314,
  margin: 0,
})

export const goodText = style([
  font.body_m_16,
  {
    color: color.brand.primary,
  },
])
