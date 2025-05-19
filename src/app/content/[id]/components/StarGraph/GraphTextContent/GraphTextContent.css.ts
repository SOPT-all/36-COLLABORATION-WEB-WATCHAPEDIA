import { color, font } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'

export const starGraphTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginBottom: '6px',
})

export const bottomText = style({
  display: 'flex',
})

export const averageWrapper = style({
  display: 'flex',
})

export const averageText = style([
  font.subtitle_m_18,
  {
    color: color.gray.gray6,
  },
])

export const graphStar = style({
  display: 'flex',
  alignItems: 'flex-start',
})

export const explainText = style([
  font.label_r_12,
  {
    color: color.gray.gray6,
  },
])

export const explainCountText = style([
  font.label_r_12,
  {
    color: color.gray.gray6,
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: '3px',
  },
])