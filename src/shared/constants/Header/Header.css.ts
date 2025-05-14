import { style } from '@vanilla-extract/css'
import { color, font } from '@/app/styles.css'

export const headerWrap = style({
  maxWidth: '375px',
})

export const topRow = style({
  display: 'flex',
  height: '60px',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: color.background.subtitle,
  gap: '21px',
  padding: '0px 0px 0px 15px',
})

export const toggleBg = style({
  display: 'flex',
  alignItems: 'center',
  background: '#fff',
  borderRadius: '999px',
  gap: 0,
})

export const toggle = style([
  font.title_sb_14,
  {
    background: 'transparent',
    color: color.gray.gray6,
    border: 'none',
    borderRadius: '999px',
    padding: '6px 14.5px',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s',
    margin: 0,
  },
])

export const toggleActive = style([
  font.title_sb_14,
  {
    background: color.brand.primary,
    color: '#fff',
    border: 'none',
    borderRadius: '999px',
    padding: '6px 14.5px',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s',
    margin: 0,
  },
])

export const tabNav = style({
  display: 'flex',
  gap: '15px',
  marginLeft: '15px',
  marginTop: '10px',
  marginBottom: '6px',
})

export const tab = style([
  font.subtitle_m_17,
  {
    background: 'none',
    border: 'none',
    color: color.gray.gray5,
    padding: '0',
    cursor: 'pointer',
    position: 'relative',
    transition: 'color 0.2s',
  },
])

export const tabActive = style([
  font.subtitle_m_17,
  {
    color: color.gray.gray8,
    border: 'none',
    background: 'none',
    position: 'relative',
    padding: '0',
    cursor: 'pointer',
    '::after': {
      content: '',
      display: 'block',
      width: '100%',
      height: '2px',
      background: color.gray.gray8,
      position: 'absolute',
      bottom: '-6px',
    },
  },
])
