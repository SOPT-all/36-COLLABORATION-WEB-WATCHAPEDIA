import { color } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const firstInfoWrapper = style({
  display: 'flex',
  padding: '24px 15px 50px 15px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 28,
  alignSelf: 'stretch',
  backgroundColor: color.background.subtitle,
})

export const secondInfoWrapper = style({
  display: 'flex',
  padding: '10px 15px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 49,
  alignSelf: 'stretch',
})
