import { color, font } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'

export const headerWrap = style({
  width: '375px',
  height: '42px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexShrink: '0',
  alignSelf: 'stretch',
})

export const headerTitle = style([
  font.headline_sb_16,
  {
    fontWeight: '600',
  },
])

export const saveBtn = style([
  font.body_r_15,
  {
    fontWeight: '400',
    marginRight: '15px',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    selectors: {
      '&[data-disabled="true"]': {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },
  },
])
