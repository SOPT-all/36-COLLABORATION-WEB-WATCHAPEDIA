import { style } from '@vanilla-extract/css'

import { color, font } from '@/app/styles.css'

export const fieldWrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  alignSelf: 'stretch',
})

export const profile = style({
  borderRadius: '4px',
  objectFit: 'cover',
})

export const rightWrapper = style({
  display: 'flex',
  paddingTop: '8px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '14px',
  flex: '1 0 0',
  alignSelf: 'stretch',
})

export const textContentWrapper = style({
  display: 'flex',
  width: '147px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '6px',
})

export const name = style([font.title_m_14])

export const roleText = style([
  font.body_r_14,
  {
    display: 'flex',
    width: '25px',
    height: '14px',
    flexDirection: 'column',
    justifyContent: 'center',
  },
])

export const separator = style({
  height: '13px',
  margin: '0',
})

export const character = style([
  font.body_r_14,
  {
    display: 'flex',
    height: '14px',
    flexDirection: 'column',
    justifyContent: 'center',
  },
])

export const bottomLine = style({
  border: `0.5px solid ${color.gray.gray2}`,
  width: 280,
  margin: 0,
})

export const characterWrapper = style({
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'flex-end',
  gap: '6px',
})
