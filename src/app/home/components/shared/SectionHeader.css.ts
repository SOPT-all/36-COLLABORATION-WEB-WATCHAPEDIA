import { style } from '@vanilla-extract/css'
import { font, color } from '@/app/styles.css'

export const sectionWrap = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 15px', // 추후 전체 컨테이너에 적용
  },
])

export const sectionTitleWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
})

export const sectionTitle = style([
  font.title_sb_20,
  {
    color: color.gray.gray8,
  },
])
