import { style } from '@vanilla-extract/css'

import { color, font } from '@/app/styles.css'

export const collectionContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 7,
  alignSelf: 'stretch',
})

export const collectionPoster = style({
  flexShrink: 0,
  borderRadius: 4,
})

export const collectionGridContainer = style({
  display: 'flex',
  width: 169,
  height: 300,
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 4,
})

export const collectionPosterGrid = style({
  display: 'flex',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  gap: 3,
  alignSelf: 'stretch',
  flexWrap: 'wrap',
  padding: 4,
  borderRadius: 5,
  background: color.background.grayLight,
})

export const collectionTitle = style([
  font.body_m_15,
  {
    color: color.gray.gray8,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    alignSelf: 'stretch',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'keep-all',
    width: 150,
  },
])

export const collectionLike = style([
  font.label_m_12,
  {
    color: color.gray.gray5,
    width: 150,
  },
])
