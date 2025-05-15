import { font, color } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { exportTraceState } from 'next/dist/trace'

export const cardWrap = style({
    width: '110px',
    height:'222px',
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
    borderRadius: '10px',
})

export const posterImg = style({
    width: '110px',
    height: '158px',
    borderRadius: '10px',
})

export const watchaBadge = style({
    zIndex: 2,
    borderRadius:999,
    position: 'absolute',
    top: '3px',
    right: '3px',
})

export const infoWrap = style({
    width: '110px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4px',
    marginTop:"4px"
})

export const title = style([
    font.title_m_14,{
        color: '#000',
    }
])

export const score= style([
    font.label_r_12,{
        color: color.brand.primary    }
])

export const tags = style({
    display: 'flex',
    flexDirection: 'row',
    gap: '4px',
})
