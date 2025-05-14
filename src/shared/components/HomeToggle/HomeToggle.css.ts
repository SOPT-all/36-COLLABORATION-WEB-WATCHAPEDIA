import { style } from '@vanilla-extract/css'
import { color, font } from '@/app/styles.css'
import { recipe } from '@vanilla-extract/recipes'

export const toggleWrapper = style({
  width: 130,
  height: 28,
})

export const toggleContainer = style({
  backgroundColor: 'white',
  position: 'relative',
  height: 28,
  borderRadius: 999,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '27px',
  transition: '0.3s ease',
})

export const toggleText = recipe({
  base: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
  },
  variants: {
    active: {
      true: [
        font.title_sb_14,
        { color: 'white', zIndex: 2, cursor: 'default' },
      ],
      false: [font.title_m_14, { color: color.gray.gray6 }],
    },
  },
})

export const toggleButton = recipe({
  base: {
    backgroundColor: color.brand.primary,
    width: 66,
    height: 28,
    borderRadius: 999,
    position: 'absolute',
    top: 0,
    transition: 'left 0.3s ease',
    cursor: 'default',
  },
  variants: {
    active: {
      true: { left: 0 },
      false: { left: 64 },
    },
  },
})
