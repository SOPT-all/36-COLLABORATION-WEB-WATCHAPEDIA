import { style } from '@vanilla-extract/css'

export const card = style({
  position: 'relative',
  borderRadius: '12px',
  overflow: 'hidden',
  width: '345px',
  height: '320px',
})

export const label = style({
  position: 'absolute',
  top: '12px',
  left: '12px',
  backgroundColor: 'black',
  color: 'white',
  fontSize: '12px',
  padding: '4px 8px',
  borderRadius: '4px',
  zIndex: 2,
})

export const image = style({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
})

export const overlay = style({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  padding: '16px',
  color: 'white',
  background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
})

export const tag = style({
  fontSize: '12px',
  opacity: 0.8,
  marginBottom: '4px',
})

export const title = style({
  fontWeight: 'bold',
  fontSize: '16px',
  margin: 0,
})

export const subtitle = style({
  fontSize: '14px',
  marginTop: '4px',
  opacity: 0.9,
})
