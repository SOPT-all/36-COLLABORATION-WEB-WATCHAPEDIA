import { style } from '@vanilla-extract/css'

import { color } from '@/app/styles.css'

export const evaluationContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 15px',
})

export const evaluationSeparator = style({
  border: `0.5px solid ${color.gray.gray2}`,
  width: '100%',
  margin: 0,
})

export const evaluationLabelWrapper = style({
  display: 'flex',
  paddingBottom: 20,
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 10,
  alignSelf: 'stretch',
})
