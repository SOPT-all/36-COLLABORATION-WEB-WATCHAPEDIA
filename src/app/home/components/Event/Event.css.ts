import { style } from '@vanilla-extract/css'
import { font } from '@/app/styles.css'

export const eventCard = style({
  width: '345px', // 추후 삭제
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
})

export const eventImage = style({
  width: '100%',
  height: '160px',
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
})

export const eventBottom = style([
  font.label_m_12,
  {
    color: 'white',
    padding: '13px 9px',
    backgroundColor: '#00A0FE',
    borderBottomLeftRadius: '6px',
    borderBottomRightRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
])
