import { vars } from '@/styles/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  padding: 10,
  color: 'red',
})

export const brandText = style({
  color: vars.color.brandPrimary,
})
