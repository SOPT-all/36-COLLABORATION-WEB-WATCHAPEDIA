import { style } from '@vanilla-extract/css'

import { font } from '@/app/styles.css'

export const recommendWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 10,
})

export const block = style({
  background: '#fff',
  borderRadius: '12px',
  gap: '12px',
  padding: '0px 15px 0px 15px',
})

export const blockHeader = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 2,
  alignSelf: 'stretch',
})

export const blockTitle = style([
  font.headline_sb_16,
  {
    display: 'flex',
    width: 345,
    height: 30,
    alignItems: 'center',
  },
])

export const cardList = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 7,
  flex: '1 0 0',
  overflow: 'scroll',
})

export const selectedChip = style({
  display: 'flex',
  marginBottom: '12px',
})

export const infoIcon = style({
  padding: 6,
})
