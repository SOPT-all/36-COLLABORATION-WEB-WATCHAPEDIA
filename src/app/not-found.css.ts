import { style } from '@vanilla-extract/css'

import { color, font } from './styles.css'

export const notFoundContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100%',
  gap: 20,
})

export const notFoundText = style([
  font.title_m_14,
  { color: color.gray.gray5, textAlign: 'center' },
])
