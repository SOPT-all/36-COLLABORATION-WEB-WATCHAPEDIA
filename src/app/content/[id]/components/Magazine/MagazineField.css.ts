import { color, font } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'

export const magazineFieldWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 10,
  alignSelf: 'stretch',
})

export const categoryWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
})

export const category = style([
  font.label_m_12,
  {
    color: color.gray.gray5,
  },
])

export const bottomWrapper = style({
  height: 61,
  width: 345,
  display: 'flex',
  justifyContent: 'space-between',
})

export const titleContentWrapper = style({
  width: 220,
  height: 40,
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
})

export const title = style([font.title_sb_14])

export const content = style([
  font.label_r_12,
  {
    color: color.gray.gray6,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
])

export const imageWrapper = style({
  borderRadius: '4px',
})
