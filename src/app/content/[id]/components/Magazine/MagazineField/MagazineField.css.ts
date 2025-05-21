import { color, font } from "@/app/styles.css"
import { style } from "@vanilla-extract/css"

export const magazineFieldWrapper = style({
  height: 87,
  width: 345,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

export const categoryWrapper = style({
  width: 90,
  height: 16,
  display: 'flex',
  gap: '4px',
})

export const category = style([
  font.label_m_12,
  {
    color: color.gray.gray5,
  }
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

export const title = style([
  font.title_sb_14
])

export const content = style([
  font.label_r_12,
  {
    color: color.gray.gray6,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }
])

export const imageWrapper = style({
  borderRadius: '4px',
})
