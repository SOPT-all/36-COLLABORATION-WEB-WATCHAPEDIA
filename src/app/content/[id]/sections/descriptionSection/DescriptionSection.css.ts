import { style } from '@vanilla-extract/css'

import { color, font } from '@/app/styles.css'

export const descriptionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 21,
  alignSelf: 'stretch',
})

export const descriptionText = style([
  font.subtitle_r_14,
  {
    height: 126,
    alignSelf: 'stretch',
    color: color.gray.gray6,
  },
])
