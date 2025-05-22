import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { color, font } from '@/app/styles.css'

export const HeaderSectionContainer = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  variants: {
    gap: {
      sm: { gap: '12px' },
      lg: { gap: '20px' },
    },
  },
})

export const HeaderSectionHeaderContainer = style({
  display: 'flex',
  height: 36,
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'stretch',
})

export const HeaderSectionTitle = style([
  font.headline_b_24,
  {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
])

export const HeaderSectionCount = style([
  font.body_r_14,
  {
    color: color.brand.primary,
  },
])

export const HeaderSectionMoreButton = style([
  font.body_r_14,
  {
    all: 'unset',
    color: color.brand.primary,
  },
])
