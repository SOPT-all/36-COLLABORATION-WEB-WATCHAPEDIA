import { style } from '@vanilla-extract/css'

import { color, font } from '@/app/styles.css'

export const textField = style([
  font.subtitle_r_14,
  {
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
  },
])
