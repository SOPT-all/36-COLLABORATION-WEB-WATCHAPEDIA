import { recipe } from '@vanilla-extract/recipes'

import { color, font } from '@/app/styles.css'

export const button = recipe({
  base: [
    font.body_m_15,
    {
      padding: '10px 14px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: color.brand.primary,
      color: 'white',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition:
        'background-color 0.3s ease, opacity 0.3s ease, cursor 0.3s ease',

      selectors: {
        '&:disabled': {
          backgroundColor: color.background.grayLight,
        },
      },
    },
  ],
  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
})
