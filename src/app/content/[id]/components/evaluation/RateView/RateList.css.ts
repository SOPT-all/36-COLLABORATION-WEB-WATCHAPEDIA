import { color, font } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const rateWrapper = recipe({
  base: {
    display: 'flex',
    gap: 6,
    alignItems: 'center',
  },
  variants: {
    color: {
      primary: {
        color: color.brand.primary,
      },
      gray: {
        color: color.gray.gray5,
      },
    },
  },
})

export const rateLabel = style([font.title_m_14])

export const rate = style([font.subtitle_m_28])

export const rateContainer = style({
  display: 'flex',
  gap: 20,
})
