import { recipe } from '@vanilla-extract/recipes'

export const tag = recipe({
  base: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    width: 'fit-content',
  },

  variants: {
    color: {
      blue: {
        backgroundColor: '#EEF7FF',
        color: '#003A4E',
      },
      orange: {
        color: '#9B3800',
        backgroundColor: '#FFF1E9',
      },
      gray: {
        backgroundColor: '#F8F8F8',
        color: '#5F5F5F',
      },
      black: {
        backgroundColor: 'black',
        color: 'white',
        opacity: '80%',
      },
    },
    size: {
      sm: { padding: '3px 8px', borderRadius: '3px' },
      lg: { padding: '6px 10px', borderRadius: '4px' },
    },
  },
})
