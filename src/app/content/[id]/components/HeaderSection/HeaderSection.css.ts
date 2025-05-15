import { color, font } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'

export const HeaderSectionContainer = style({
  gap: 12,
  display: 'flex',
  flexDirection: 'column',
})

export const HeaderSectionHeaderContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
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
