import { color } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'

export const textField = style({
  color: color.gray.gray7,
  width: '100%',
  height: '100%',
  background: 'none',
  border: 'none',
  outline: 'none',
  resize: 'none',

  selectors: {
    '&::placeholder': {
      color: color.gray.gray4,
    },
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&': {
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    },
  },
})
