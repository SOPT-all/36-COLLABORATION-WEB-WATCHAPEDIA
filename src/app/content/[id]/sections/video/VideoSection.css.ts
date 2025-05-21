import { color, font } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'

export const videoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 10,
  alignSelf: 'stretch',
})

export const videoPlayerOverlay = style({
  position: 'absolute',
  width: 168,
  height: 110,
  flexShrink: 0,
  borderRadius: 10,
  background: 'rgba(0, 0, 0, 0.20)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const videoPlayerTitle = style([
  font.title_m_14,
  {
    color: color.gray.gray6,
  },
])
