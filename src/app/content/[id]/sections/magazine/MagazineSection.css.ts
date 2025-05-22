import { style } from '@vanilla-extract/css'

import { color } from '@/app/styles.css'

export const magazineWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 16,
  alignSelf: 'stretch',
})

export const grayLine = style({
  width: '100%',
  border: `0.5px solid ${color.gray.gray1}`,
  margin: 0,
})
