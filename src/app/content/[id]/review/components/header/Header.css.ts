import { style } from '@vanilla-extract/css'

import { font } from '@/app/styles.css'

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
  font.headline_sb_16
])

export const saveBtn = style([
  font.body_r_15,
  {
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
