import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { color } from '@/app/styles.css'

export const spoilerToggleWrapper = style({
  width: 42,
  height: 25,
  display: 'flex',
  alignItems: 'center',
})

export const spoilerToggleBar = recipe({
  base: {
    width: 42,
    height: 19,
    borderRadius: 999,
    position: 'relative',
    cursor: 'pointer',
    border: 'none',
  },
  variants: {
    active: {
      true: { backgroundColor: color.brand.primaryLight },
      false: { backgroundColor: color.gray.gray1 },
    },
  },
})

export const spoilerToggleButton = recipe({
  base: {
    width: 23,
    height: 23,
    borderRadius: 999,
    backgroundColor: 'white',
    border: `1px solid ${color.gray.gray1}`,
    position: 'absolute',
    transition: 'left 0.3s ease',
    top: -3,
  },
  variants: {
    active: {
      true: { left: 17 },
      false: { left: 0 },
    },
  },
})