import { color, font } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'

export const comentAllWrapper = style({
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
  height: '1px',
  backgroundColor: color.border.borderMedium,
})

export const goodText = style([
  font.body_m_16,
  {
    color: color.brand.primary,
  },
])
