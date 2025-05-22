import { style } from '@vanilla-extract/css'

import { color } from '@/app/styles.css'

export const magazineWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})

export const grayLine = style({
  height: 1,
  width: '100%',
  backgroundColor: color.gray.gray1,
})
