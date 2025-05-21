import { color, font } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const starGraphWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  gap: 2,
  alignSelf: 'stretch',
})

export const graphBarWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const scoreLabel = recipe({
  base: [font.body_sb_13],
  variants: {
    highlight: {
      true: {
        color: color.brand.primary,
      },
      false: {
        color: color.gray.gray4,
      },
    },
  },
})

export const graphBar = recipe({
  base: {
    width: 25,
    borderRadius: '3px 4px 0 0',
  },
  variants: {
    active: {
      true: {
        backgroundColor: color.brand.primary,
      },
      false: {
        backgroundColor: color.brand.primaryLight,
      },
    },
  },
})
