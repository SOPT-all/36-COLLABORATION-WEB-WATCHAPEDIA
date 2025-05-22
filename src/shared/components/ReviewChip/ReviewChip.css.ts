import { recipe } from '@vanilla-extract/recipes'

import { color, font } from '@/app/styles.css'

export const reviewChip = recipe({
  base: {
    display: 'flex',
    padding: '10px 12px',
    borderRadius: '4px',
    border: 'none',
    textAlign: 'center',
    height: '30px',
    alignItems: 'center',
    transition:
      'background-color 0.3s ease, opacity 0.3s ease, cursor 0.3s ease',
    cursor: 'pointer',
    color: color.gray.gray6,
    backgroundColor: color.background.subtitle,

    selectors: {
      '&:disabled': {
        opacity: '20%',
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    isSelected: {
      false: [
        font.label_r_12,
        {
          color: color.gray.gray6,
        },
      ],
      true: [
        font.label_m_12,
        {
          backgroundColor: color.brand.primaryWhite,
          color: color.brand.primary,
          border: '1px solid',
          borderColor: color.brand.primary,
        },
      ],
    },
  },
})
