import { style } from '@vanilla-extract/css'

import { font, color } from '@/app/styles.css'

export const magazineImage = style({
  borderRadius: '6px',
})

export const magazineBottom = style({
  borderRadius: '6px',
})

export const magazineLabel = style([
  font.label_r_12,
  {
    borderRadius: '6px',
    color: color.gray.gray5,
    margin: '8px 0',
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
  },
])

export const magazinelabelIcon = style({
  border: `1px solid ${color.gray.gray2}`,
  borderRadius: '100%',
})

export const magazineTitle = style([
  font.title_sb_20,
  {
    borderRadius: '6px',
    color: color.gray.gray8,
    marginBottom: '4px',
  },
])

export const magazineCaption = style([
  font.subtitle_r_14,
  {
    borderRadius: '6px',
    color: color.gray.gray5,
  },
])
