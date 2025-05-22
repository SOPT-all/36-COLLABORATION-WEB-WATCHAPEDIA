import { font, color } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'

export const cardWrap = style({
  width: '110px',
  height: '230px',
})

export const posterWrap = style({
  position: 'relative',
  display: 'flex',
  width: '110px',
  height: '158px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  borderRadius: '5px',
  overflow: 'hidden',
})

export const posterImg = style({
  width: '110px',
  height: '158px',
  objectFit: 'cover',
  display: 'block',
})

export const watchaBadge = style({
  zIndex: 2,
  borderRadius: 999,
  position: 'absolute',
  top: '3px',
  right: '3px'
})

export const dDayBadge = style([
  font.body_sb_13,{
    position: 'absolute',
    top: '8px',
    left: '8px',
    backgroundColor:color.gray.gray8,
    color: color.gray.gray1,
    borderRadius: '6px',
    padding: '2px 8px',
    zIndex: 2,
  }
]
  
)

export const rankBadge = style([
  font.body_sb_13,{
    position: 'absolute',
    bottom: '8px',
    left: '8px',
    color: '#fff',
    borderRadius: '6px',
    padding: '3px 8px',
    zIndex: 2,
    backgroundColor:color.gray.gray8
  } 
]);

export const actionWrap = style([
  font.title_sb_14,
  {
    position: 'absolute',
    width:"85%",
    left: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px 8px',
    zIndex: 2,
    background: color.gray.gray7
  },
])

export const addButton = style({
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: '22px',
  fontWeight: 700,
  cursor: 'pointer',
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const count = style([
  font.title_sb_14,
  {
    color: '#fff',
  },
])

export const infoWrap = style({
  width: '110px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  marginTop: '4px',
})

export const title = style([
  font.title_m_14,
  {
    color: '#000',
    marginBottom:"4px",
    marginTop:"4px"
  },
])

export const score = style([
  font.label_r_12,
  {
    color: color.brand.primary,
  },
])

export const tags = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '4px',
})


export const date = style([
  font.subtitle_m_13,{
    fontWeight:"500",
    color:color.brand.primary,
    display:"flex",
    alignItems:"center",
    gap:"4px"
  }
])

export const starWrap=style ({
  display: "flex",
  gap:"2px",
  marginBottom :"4px"
})

export const starLabel= style([
  font.label_r_12,{
    color:color.brand.primary
  }
])

export const watchaIcon = style({
  position: 'absolute',
  top: '8px',
  right: '8px',
  zIndex: 1
})
