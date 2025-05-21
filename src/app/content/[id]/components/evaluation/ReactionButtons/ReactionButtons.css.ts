import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { color, font } from '@/app/styles.css'

export const reactionButtonsContainer = style({
  display: 'flex',
  width: 345,
  justifyContent: 'center',
  alignItems: 'center',
  gap: 52,
  padding: '10px 0px',
})

export const reactionButton = style([
  {
    all: 'unset',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 53,
    height: 53,
  },
])

export const reactionButtonIcon = recipe({
  base: {
    width: 28,
    height: 28,
    transition: 'color 0.3s ease',
  },
  variants: {
    active: {
      true: {
        color: 'black',
      },
      false: {
        color: color.gray.gray5,
      },
    },
  },
})

export const reactionButtonText = recipe({
  base: [
    font.label_r_12,
    {
      color: color.gray.gray5,
      textAlign: 'center',
      transition: 'color 0.3s ease',
    },
  ],
  variants: {
    active: {
      true: {
        color: 'black',
      },
      false: {
        color: color.gray.gray5,
      },
    },
  },
})
