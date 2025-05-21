import { color, font } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const labelContentContainer = recipe({
  base: {
    display: 'flex',
    height: 36,
    alignItems: 'center',
  },
  variants: {
    gap: {
      sm: {
        gap: 10,
      },
      lg: {
        gap: 33,
      },
    },
  },
})

export const label = style([font.label_r_12, { color: color.gray.gray6 }])
