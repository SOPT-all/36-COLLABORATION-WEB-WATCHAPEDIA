import { style } from '@vanilla-extract/css'

import { font, color } from '@/app/styles.css'

export const commentCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  borderRadius: '6px',
  border: `1px solid ${color.gray.gray2}`,
  padding: '11px',
})

export const userInfo = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '4px',
})

export const userName = style([
  font.body_r_14,
  {
    color: color.gray.gray6,
  },
])

export const starList = style({
  display: 'flex',
  marginLeft: 'auto',
})

export const movieInfo = style({
  display: 'flex',
  gap: '8px',
})

export const movieText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
})

export const movieTitle = style([font.title_sb_14])
export const movieReview = style([
  font.body_r_14,
  {
    color: color.gray.gray6,
  },
])

export const commentFooter = style({
  display: 'flex',
  borderTop: `1px solid ${color.gray.gray1}`,
  paddingTop: '12px',
  gap: '9px',
})

export const iconGroup = style([
  font.title_m_14,
  {
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
    color: color.icon.gray,
  },
])
