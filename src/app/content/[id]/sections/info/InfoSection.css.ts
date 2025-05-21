import { style } from '@vanilla-extract/css'

export const overlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  height: 530,
  width: 375,
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  padding: '14px 15px',
  gap: 16,
  justifyContent: 'space-between',
  background:
    'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)',
  boxSizing: 'border-box',
})

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '375px',
  height: '530px',
})
