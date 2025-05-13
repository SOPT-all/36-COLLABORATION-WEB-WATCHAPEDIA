import { style, styleVariants } from '@vanilla-extract/css'
import { color } from '@/app/styles.css'

export const button = style({
  padding: '11px 16px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: color.brand.primary,
  color: 'white',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, opacity 0.3s ease, cursor 0.3s ease',

  selectors: {
    '&:disabled': {
      backgroundColor: color.background.grayLight,
    },
  },
})
