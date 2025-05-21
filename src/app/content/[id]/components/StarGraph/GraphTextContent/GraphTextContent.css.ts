import { color, font } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'

export const starGraphTextWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 8,
  alignSelf: 'stretch',
})

export const bottomText = style({
  display: 'flex',
  alignItems: 'flex-end',
  gap: 5,
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

export const graphStarWrapper = style({
  display: 'flex',
  height: 24,
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
})

export const explainText = style([
  font.label_r_12,
  {
    color: color.gray.gray6,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
    alignSelf: 'stretch',
  },
])

export const explainCountText = style([
  font.label_r_12,
  {
    color: color.gray.gray6,
    display: 'flex',
    width: 46,
    height: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
])
