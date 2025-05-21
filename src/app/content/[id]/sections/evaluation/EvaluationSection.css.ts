import { color } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'

export const evaluationContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  padding: '0 15px',
})

export const evaluationSeparator = style({
  border: `0.5px solid ${color.gray.gray2}`,
  width: '100%',
  margin: 0,
})
