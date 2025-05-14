import { recipe } from '@vanilla-extract/recipes'
import { font } from '@/app/styles.css'

export const tag = recipe({
  base: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    width: 'fit-content',
  },

  variants: {
    color: {
      blue: [
        font.label_r_10,
        {
          backgroundColor: '#EEF7FF',
          color: '#003A4E',
        },
      ],
      orange: [
        font.label_r_10,
        {
          color: '#9B3800',
          backgroundColor: '#FFF1E9',
        },
      ],
      gray: [
        font.label_r_10,
        {
          backgroundColor: '#F8F8F8',
          color: '#5F5F5F',
        },
      ],
      black: [
        font.body_sb_13,
        {
          backgroundColor: 'black',
          color: 'white',
          opacity: '0.8',
        },
      ],
    },
    size: {
      sm: { padding: '3px 8px', borderRadius: '3px' },
      lg: { padding: '6px 10px', borderRadius: '4px' },
    },
  },
})
