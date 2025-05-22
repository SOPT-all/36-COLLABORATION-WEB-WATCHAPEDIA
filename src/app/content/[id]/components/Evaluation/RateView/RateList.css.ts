import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { color, font } from '@/app/styles.css'

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

export const rateLabel = recipe({
  variants: {
    label: {
      예상: [font.title_m_14],
      평균: [font.body_r_14],
    },
  },
})

export const rate = style([font.subtitle_m_28])

export const rateContainer = style({
  display: 'flex',
  gap: 20,
})

export const rateSeparator = style({
  border: `0.5px solid ${color.gray.gray2}`,
  height: 22,
  margin: 0,
  alignSelf: 'center',
})
