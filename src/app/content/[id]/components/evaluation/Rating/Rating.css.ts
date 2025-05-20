import { color } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const ratingContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  padding: '20px 0 0 0',
  alignSelf: 'stretch',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ratingStarContainer = style({
  display: 'flex',
  width: 'fit-content',
  padding: '0 10px',
})

export const ratingStar = recipe({
  base: {
    display: 'inline-block',
  },
  variants: {
    isFull: {
      true: { color: color.brand.primary },
      false: { color: color.gray.gray2 },
    },
    isHalf: {
      true: { color: color.brand.primary },
      false: { color: color.gray.gray2 },
    },
  },
})

export const overlayStarHalf = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '50%',
  height: '100%',
  overflow: 'hidden',
  color: color.brand.primary,
  transition: 'color 0.3s ease-in-out',
})

export const baseStar = recipe({
  base: {
    all: 'unset',
    position: 'relative',
    display: 'inline-block',
    transition: 'color 0.3s ease-in-out',
  },
  variants: {
    isFull: {
      true: { color: color.brand.primary },
      false: { color: color.gray.gray2 },
    },
  },
})
