import { style } from '@vanilla-extract/css'

import { color } from '@/app/styles.css'

export const containerStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  borderRadius: '8px',
})

export const spinnerStyle = style({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: '4px solid white',
  borderTopColor: color.brand.primary,
  willChange: 'transform',
  transformOrigin: 'center',
})
