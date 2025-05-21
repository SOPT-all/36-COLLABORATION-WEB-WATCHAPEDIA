import { style } from '@vanilla-extract/css'
import { font, color } from '@/app/styles.css'

export const adWrap = style([
  {
    maxWidth: '345px',
    borderRadius: '6px',
    width: 'fit-content',
    border: `1px solid ${color.border.borderMedium}`,
    backgroundColor: 'white',
  },
])

export const adTextWrap = style({
  maxWidth: '204px',
  display: 'flex',
  flexDirection: 'column',
  wordBreak: 'keep-all',
})

export const contentWrap = style([
  {
    padding: '17.5px 13px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
])

export const adTitle = style([
  font.title_sb_20,
  {
    marginBottom: '2px',
    color: color.gray.gray8,
    wordBreak: 'keep-all',
  },
])

export const adCaption = style([
  font.label_m_12,
  {
    marginBottom: '2px',
    color: color.gray.gray5,
    wordBreak: 'keep-all',
  },
])

export const adImage = style({
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
})

export const bottomCaptionWrap = style([
  {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
])

export const bottomCaption = style([font.subtitle_b_17])
